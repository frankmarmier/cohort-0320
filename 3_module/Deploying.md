# Deploying to Heroku !

## 1 - Project structure on github !

    Make sure you have 2 github repos with the package.json at their root.
    Their structure should look like the images below.

![](https://i.imgur.com/aSjfM6X.png)

![](https://i.imgur.com/MkP6tnz.png)

## 2 - Create 2 applications on heroku !

![](https://i.imgur.com/YqXQLOh.png)

## 3 - Backend application !

    In order to have access to the mLab (mongodb hosting service) for your backend application,
    you will need to set your billing information on your heroku account.

![](https://i.imgur.com/Sp8GRwF.png)

![](https://i.imgur.com/acBzo6R.png)

## 4 - Both applications

Setup the environement variables.

**CAREFUL** remove the `/` at the end of the url when setting your backend and frontend url !
If you do not remove the `/` at the end, your requests will be pointing to
http://localhost:4000 **/**/api/toto ! This will not be valid.
Your urls must look likes this : http://my-awesome-app.herokuapp.com

![](https://i.imgur.com/9zUFlAq.png)
![](https://i.imgur.com/iHBqCFh.png)

## 5 - Deploying !

![](https://i.imgur.com/zpZqsbh.png)


### Issues

If you run into an application error once you have deployed type in the command
`heroku logs -a your_app_name --tail`  
Look at the error messages it's throwing, it will help your resolve them.

For the frontend, if you run into an error `H=10`, your application might require that you setup a build back.  
In order to do so, navigate to `settings > buildpacks` and add `https://github.com/mars/create-react-app-buildpack.git` as buildpack.
You will then have to redeploy :).
