import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
    Req,
    Res,
} from '@nestjs/common';
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

    // POST http://localhost:3000/products/create/aditya
    @Post('/create/:name')
    create(_: Request, @Res() res: Response, @Param() param): void {
        res.send({ message: 'POST /create route', param });
    }

    @Put('/update')
    put(_: Request, @Res() res: Response): void {
        res.send({ message: 'PUT /put route' });
    }

    @Patch('/patch')
    patch(_: Request, @Res() res: Response): void {
        res.send({ message: 'PATCH /patch route' });
    }

    @Delete('/delete')
    delete(_: Request, @Res() res: Response): void {
        res.send({ message: 'DELETE /delete route' });
    }
}
