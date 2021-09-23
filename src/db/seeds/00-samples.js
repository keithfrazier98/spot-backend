
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('samples').del()
    .then(function () {
      // Inserts seed entries
      return knex('samples').insert([
        { sample_name: 'fred flinstone',sample_age: '55'},
        { sample_name: 'ricky bobby',sample_age: '47'},
        { sample_name: 'rick sanchez',sample_age: '67'},
      ]);
    });
};
