<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="../Styles/PlanetStyles.css" rel="stylesheet" type="text/css" />
</head>

              
<body>

  <?php   
        $mysqli = new mysqli("sql6.freesqldatabase.com","sql6680680","SBHzZpznBr","sql6680680");

        if ($mysqli -> connect_errno) {
          echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
          exit();
        }

        $sql = "SELECT Lastname, Age FROM Persons ORDER BY Lastname";

        if ($result = $mysqli -> query($sql)) {
          while ($row = $result -> fetch_row()) {
            printf ("%s (%s)\n", $row[0], $row[1]);
          }
          $result -> free_result();
  }

  $mysqli -> close();
  ?>
  
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  
  <div class="PlanetPage">
    
    <div class="PlanetBox" height="100%">
        <img class="Planet" src="../Images/Earth.png" height="440px" width="440px">
        <div class="PlanetText">Earth</div>
    </div>
    
    <div class="PlanetDisc">

      
      <h1 class="Center">Информация о планете "Земля"</h1>
      <h3 class="Left">Вес:</h3>
      <h3 class="Left">Диаметр:</h3>
      <h3 class="Left">Плотность:</h3>
      <h3 class="Left">Длина суток:</h3>
      <h3 class="Left">Растояние от солнца:</h3>
      <h3 class="Left">Орбитальный период:</h3>
    </div>
    
  </div>
  <script src="../loader.js"></script>
</body>

</html>