const router = require('express').Router();
const e = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  }).then(tags => {
    console.log(tags)
    res.json(tags);
  })
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const getTag = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!getTag) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(getTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  // if the tag created were connected to a product then we need to update the product to unlude this tags id
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if(!updatedTag) {
      res.status(404).json({message: 'No Tag with this id!'});
      return;
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id, 
      }, 
    })
    if(!deletedTag) {
      res.status(404).json({message: 'No Tag with this id!'})
    }
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
