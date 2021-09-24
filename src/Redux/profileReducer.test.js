import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let initialState = {
    posts: [
        {id: 1, message: 'It`s my life', likeCount: 46},
        {id: 2, message: 'How much is the fish?', likeCount: 38},
        {id: 3, message: 'You are my heart...', likeCount: 35}
    ]
}

test('length of posts should be incremented', () => {
    //1. data
    let action = addPostActionCreator('this is test')

    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
   expect (newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {
    //1. data
    let action = addPostActionCreator('this is test')

    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect (newState.posts[3].message).toBe('this is test');
});

test('length of messages should be decrement after deleting', () => {
    //1. data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect (newState.posts.length).toBe(2);
});

test('length of messages should not be decrement if id is incorrect', () => {
    //1. data
    let action = deletePost(14)

    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect (newState.posts.length).toBe(3);
});