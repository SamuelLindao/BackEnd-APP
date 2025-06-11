exports.seed = function (knex)
{
  return knex("livros").del()
      .then(function (){
        return knex("livros").insert([
          {
            titulo: "Web Design Responsivo", autor: "Mauricio Samy Silva", ano:2014,
            preco:73.0, foto:""
          },
              {
            titulo: "Web Design Olá", autor: "Mauricio Samy Silva", ano:2014,
            preco:73.0, foto:""
          },
              {
            titulo: "Web Aviador Responsivo", autor: "Mauricio Samy Silva", ano:2014,
            preco:73.0, foto:""
          },
              {
            titulo: "Web Design", autor: "Mauricio Samy Silva", ano:2014,
            preco:73.0, foto:""
          }

        ])
      })
}