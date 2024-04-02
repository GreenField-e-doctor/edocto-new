const { Blog } = require('../database-mysql/index');

const getAllBlogs = async (req, res) => {
    try {
        const Blogs = await Blog.findAll();
        res.status(200).json(Blogs);
    } catch (error) {
        console.error('Error fetching Blogs:', error);
        res.status(500).json({ error: 'Failed to fetch Blogs' });
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const Blog = await Blog.findOne({ where: { id } });
        if (Blog) {
            res.status(200).json(Blog);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error fetching Blog:', error);
        res.status(500).json({ error: 'Failed to fetch Blog' });
    }
}

const createBlog = async (req, res) => {
    try {
        const body = req.body;
        const Blog = await Blog.create(body);
        res.status(201).json(Blog);
    } catch (error) {
        console.error('Error creating Blog:', error);
        res.status(500).json({ error: 'Failed to create Blog' });
    }
}
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const Blog = await Blog.findOne({ where: { id } });
        if (Blog) {
            await Blog.update(body);
            res.status(200).json(Blog);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error updating Blog:', error);
        res.status(500).json({ error: 'Failed to update Blog' });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const Blog = await Blog.findOne({ where: { id } });
        if (Blog) {
            await Blog.destroy();
            res.status(200).json({ message: 'Blog deleted successfully' });
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error deleting Blog:', error);
        res.status(500).json({ error: 'Failed to delete Blog' });
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog

}
