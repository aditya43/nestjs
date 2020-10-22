import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    roottGet(): string {
        return 'Root path GET route';
    }

    @Get('/custom-get')
    customGet(): string {
        return 'Custom path GET route';
    }
}
