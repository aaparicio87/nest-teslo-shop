import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { FindOneDto } from './dto/find-one.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(pagination: PaginationDto) {
    const { limit = 10, offset = 0 } = pagination;
    try {
      return this.productRepository.find({
        take: limit,
        skip: offset,
      });
    } catch (error: unknown) {
      this.handleExceptions(error);
    }
  }

  async findOne(term: FindOneDto) {
    try {
      const product = await this.productRepository.findOne({
        where: term,
      });
      if (!product)
        throw new NotFoundException(
          `Product with id ${term.id} or slug ${term.slug} not found`,
        );
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      // If exists, prepare the data to update
      const product = await this.productRepository.preload({
        id,
        ...updateProductDto,
      });
      if (!product)
        throw new NotFoundException(`Product with id ${id} not found`);

      await this.productRepository.save(product);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(term: FindOneDto) {
    try {
      const product = await this.findOne(term);
      await this.productRepository.remove(product);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
