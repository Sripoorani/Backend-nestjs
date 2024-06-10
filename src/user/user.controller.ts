import {  Get, Post, Put, Delete, Body, Param, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import * as PDFDocument from 'pdfkit';

@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {}

    @Post('create')
    async create(@Body() user: User) {
    
      return this.userService.create(user);
    }

    @Get('get')
    read(): Promise<User[]> {
      
      return this.userService.readAll();
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() user: User): Promise<any> {
        user.user_id = Number(id);
        return this.userService.update(user);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    } 

    @Get('generate-pdf')
    async generatePDF(@Res() res: Response) {
      const users = await this.userService.readAll();
  
      const doc = new PDFDocument();
      doc.pipe(res);
  
      doc.fontSize(16).text('User List', { align: 'center' });
      doc.moveDown();
  
      users.forEach(user => {
        doc.text(`Name: ${user.username}`);
        doc.text(`Email: ${user.email}`);
        doc.text(`Phone Number: ${user.phone_number}`);
        doc.text(`Address: ${user.address}`);
     
        doc.moveDown();
      });
  
      doc.end();
    }
   
}
