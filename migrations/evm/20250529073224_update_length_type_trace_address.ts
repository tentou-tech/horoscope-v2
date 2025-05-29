import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('evm_internal_transaction', (table) => {
    table.text('type_trace_address').alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('evm_internal_transaction', (table) => {
    table.string('type_trace_address').alter();
  });
}
