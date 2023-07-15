# instagram_API

https://easy-ruby-oyster-veil.cyclic.app/

handle user routers :

/user/signup (POST)  ==>{path-name-email-password-confirmPassword-age-mobileNumber}

/user /verify/:token  (GET) 

/user /signIn (POST) ===>{email-password}

/user /update  (PUT) ==> {_id,mobileNumber,name , token}

/user/updateProfilePic (PUT) ==> {path,token}

/user /delete  (Delete) ==>{_id,token}

/user /softDeleted  (Delete)==>{_id,token}

/user /changePassword (PUT) ==> {email-password,token}

/user /forgetPassword (POST) ==>{email} ==>{newPassword,code}


/user /resetPassword/:token (GET)

/user /logout (PUT) ==>{token,_id}

Handle posts routers :

/post/addPost  (POST)===>{text,path,token)
/post/userPost  (GET)===>{token)
/post/allPost (GET)===>{token)
/post/updatePost (PUT)===>{text,_id,token)
/post /updatePostStatus (PUT)===>{privacy,_id,token)
/post/deletePost (DELETE)===>{_id,token)
/post /likePost (POST)===>{postId,token)
/post /disLikePost   (POST)===>{postId,token)
