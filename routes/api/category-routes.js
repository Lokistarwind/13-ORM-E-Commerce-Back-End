const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{model: Product}]
    })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch( (err) => {
      res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [{model: Product}]
    }).then((CategoryData) =>{

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(CategoryData);
  }) 
    .catch( (err) => {
      res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      category_name: "socks",
    }
  */
    Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
        return res.json(category);
      })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  });

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
  .then((categoryData) =>{
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
}) 
  .catch( (err) => {
    res.status(500).json(err);
})
});

module.exports = router;
