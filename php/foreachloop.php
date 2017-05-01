<?php
$cities = array(
  'tokyo' => [
    13.6,
    1868,
    'Japan',
    'map-japan.png'
  ],
  'dc' => [
    0.6,
    1790,
    'United States',
    'map-us.png'
  ],
  'moscow' => [
    11.5,
    1147,
    'Russia',
    'map-russia.png'
  ],
  'london' => [
    8.6,
    43,
    'England',
    'map-england.png'
  ],
);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/master.css" media="screen">
    <title>Try PHP</title>
  </head>
  <body>
    <div class="container">
      <div class="sidebar">
        <div class="info">
          <ul>
            <li>City of Washington DC</li>
            <li>Population: <?php echo $cities['dc'][0]; ?> million.</li>
            <li>Established: <?php echo $cities['dc'][1]; ?> AD.</li>
            <li>Country: <?php echo $cities['dc'][2]; ?></li>
          </ul>
        </div>
        <div class="details">
          <p>
            Washington DC is the capital of the United States.
          </p>
        </div>
      </div>
      <div class="map">
        <img class='map' src="/images/map-dc.png"/>
        <div class="nav">
          <ul>
            <?php
            foreach($cities as $city => $data){
              echo '<li class="item">';
              echo "<a href='#' class=$city>$data[2]</a>";
              echo '</li>';
            }
            ?>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>