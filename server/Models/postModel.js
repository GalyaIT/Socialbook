import mongoose, { Schema } from 'mongoose'


const PostSchema = mongoose.Schema(
    {
        author: {
            type: Schema.Types.ObjectId, ref: 'User' ,
            required: true
        },
        description: String,
        likes:[],
        image:String,   
    },
    {
        timestamps:true
    }
);

const PostModel = mongoose.model("Posts", PostSchema);

export default PostModel;



