import { Controller, Get } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  @Get()
  findAllArticles() {
    return ['article 1', 'article 2', 'article 3'];
  }

  @Get('labels')
  findAllLabels() {
    return ['nestjs', 'nextjs', 'typescript'];
  }
}
