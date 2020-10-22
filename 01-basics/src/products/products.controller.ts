import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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

    // http://localhost:3000/products/req-res?name=adi&city=pune
    @Get('/req-res')
    reqRes(@Req() req: Request, @Res() res: Response, @Query() query): void {
        console.log(req);
        res.send({ name: 'Aditya Hajare', query });
    }
}
