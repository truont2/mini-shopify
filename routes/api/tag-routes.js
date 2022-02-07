// file to modify tags data

// imprt table data and express 
const router = require('express').Router();
const express = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// route to get all tag data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  }).then(tags => {
    res.json(tags);
  })
});

// route to grab a single tag
router.get('/:id', async (req, res) => {
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

// route to create a new product
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch(err) {
    res.status(400).json(err);
  }
});

// route to update a specific tag
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

// route to delete a specific tag
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
