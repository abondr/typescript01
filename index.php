
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v3.8.5">
    <title>Angular examples</title>

    <!-- Bootstrap core CSS -->
    <link href="lib/css/bootstrap.min.css" rel="stylesheet" >

</head>
<body class="py-4">
<div class="container">

    <h1>Angular Page examples</h1>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Page</th>
        </tr>
        </thead>
        <tbody>
        <?php 
            for($i=0;$i<7;$i++){
                $strNum = str_pad($i+1,3,'0',STR_PAD_LEFT);
                echo "<tr>
                <th scope=\"row\">{$i}</th>
                <td><a href=\"page".$strNum.".php\">Page".$strNum."</a></td>
            </tr>";
            }
        ?>    
        </tbody>
    </table>

</div> <!-- /container -->
</body>
</html>
