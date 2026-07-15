exports.index = (req, res) => {
  res.render('index', 
    {
      titulo: 'Este é o título da página',
      numeros: [1, 2, 3, 4, 5, 6]
    }
  )
};
