<?php
$img_array = glob('bzhi/*.{gif,jpg,png,jpeg,webp,bmp}', GLOB_BRACE);
if(count($img_array) == 0) die('没找到图片文件。请先上传一些图片到 '.dirname(__FILE__).'/bzhi/ 文件夹');
header('Content-Type: image/png');
echo(file_get_contents($img_array[array_rand($img_array)]));
?>