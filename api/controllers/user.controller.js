import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { handleError } from '../utils/error.js';

export const test = (req, res)=>{
    res.json({
        message:"Hello World",
    });
}


export const updateUser = async (req, res, next) => {
    // Check if user is updating their own account
    if (req.user.id !== req.params.id) {
        return next(handleError(401, 'You can only update your own account!'));
    }

    try {
        // If password is being updated, hash it
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }

        // Update user in database
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true } // Return the updated document
        );

        // Remove password from response
        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

