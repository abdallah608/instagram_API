# instagram_API

https://easy-ruby-oyster-veil.cyclic.app/

handle user routers :

/user/signup (POST)  ==>{path-name-email-password-confirmPassword-age-mobileNumber}
/user /verify/:token  (GET)  ==>
/user /signIn (POST) ===>{email-password}
/user /update  (PUT) ==>
/user/updateProfilePic (PUT) ==> {path}
/user /delete  (Delete) ==>
/user /softDeleted  (Delete)==>
/user /changePassword (PUT) ==> {email-password,token}
/user /forgetPassword (POST) ==>
/user /resetPassword/:token (GET)
/user /logout (PUT) ==>
-------------------------------------------------
Handle posts routers :

/post/addPost
/post/userPost
/post/allPost 
/post/updatePost
/post /updatePostStatus 
/post/deletePost
/post /likePost 
/post /disLikePost
