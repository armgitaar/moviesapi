import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('title').notNullable()
      table.string('poster_image').notNullable()
      table.string('release_year').notNullable()
      table.string('top_billed').notNullable()
      table.string('genres').notNullable()
      table.string('movie_description').notNullable()
      table.string('movie_review').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
