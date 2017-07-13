<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="plugin/css/style.css">
    <link rel="stylesheet" type="text/css" href="css/demo.css">
    <script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="plugin/jquery-jplayer/jquery.jplayer.js"></script>
    <script type="text/javascript" src="plugin/ttw-music-player-min.js"></script>
    
    <script>
    <?php 
        function listdir($dir='.') { 
            if (!is_dir($dir)) { 
                return false; 
            } 
            
            $files = array(); 
            listdiraux($dir, $files); 

            return $files; 
        } 

        function listdiraux($dir, &$files) { 
            $handle = opendir($dir); 
            while (($file = readdir($handle)) !== false) { 
                if ($file == '.' || $file == '..') { 
                    continue; 
                } 
                $filepath = $dir == '.' ? $file : $dir . '/' . $file; 
                if (is_link($filepath)) 
                    continue; 
                if (is_file($filepath)) 
                    $files[] = $filepath; 
                else if (is_dir($filepath)) 
                    listdiraux($filepath, $files); 
            } 
            closedir($handle); 
        } 

        $files = listdir('media'); 
        sort($files, SORT_LOCALE_STRING); 

        $js_array = json_encode($files);
        echo "var media_array = ". $js_array . ";\n";

        // foreach ($files as $f) { 
        //     //if(!is_dir($f))
        //     echo  $f, "\n"; 
        // } 
    ?>
    
    </script>
    <script type="text/javascript" src="js/myplaylist.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            var description = 'Live, Pleasant music';

            $('body').ttwMusicPlayer(myPlaylist, {
                autoPlay:true, 
                description:description,
                jPlayer:{
                    swfPath:'plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
                }
            });
        });
    </script>
</head>
<body>

</body>
</html>