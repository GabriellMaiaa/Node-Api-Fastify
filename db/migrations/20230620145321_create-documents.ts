import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()//Para criar uma chave Primária com o Gerador de ID
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()//10 são a qtd de num, e o 2 é as casas decimais
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()//Para registrar a criação de algo
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}

