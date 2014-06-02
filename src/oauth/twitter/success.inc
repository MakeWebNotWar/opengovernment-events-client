<!DOCTYPE html>
<html>
  <head>
    <title>
      Authorize
    </title>
    <script>
      var hash = "#access_token=<?php echo $access_token['oauth_token']; ?>&token_secret=<?php echo $access_token['oauth_token_secret']; ?>";
      window.opener.Opengov.TwitterOauth.trigger('redirect', hash);  
      window.close();
    </script>
  </head>
</html>
