const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// route to grab all the categories
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Category.findAll({
    include: [Product]
  }).then(allCategories => {
    console.log(allCategories)
    res.json(allCategories);
  })
});

// route to grab a specific category
router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const getCategory = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if(!getCategory) {
      res.status(404).json({message: "No Category with this ID!"});
      return;
    }
    res.status(200).json(getCategory);
  } catch(err) {
    res.status(500).json(err);
  }
});

// route to create a new category
router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch(err) {
    res.status(400).json(err);
  }
});

// route to update a category
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updatedCat = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!updatedCat){
      res.status(404).json({message: "No Category with this ID!"});
      return;
    }
    res.status(200).json(updatedCat);
  } catch(err) {
    res.status(500).json(err);
  }

});

// router to delete a category
router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCat = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!deletedCat) {
      res.status(404).json({message: "No Category with this ID!"});
      return;
    }
    res.status(200).json(deletedCat);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
