<!DOCTYPE html>
<html>
  <head>
    <title>
      Authorize
    </title>
    <script>
      var access_token = "<?php echo $access_token['oauth_token']; ?>";
      var token_secret = "<?php echo $access_token['oauth_token_secret']; ?>";
      var signup = window.opener.location.href;
      var hash = "#access_token=" + access_token + "&token_secret=" + token_secret;

      if(signup.indexOf('signup') > -1){
        hash = hash + "&signup=true";
      }

      window.opener.Opengov.TwitterOauth.trigger('redirect', hash);  
      
      window.close();
    </script>
  </head>
</html>
