## 下载地址
   <br>
   <a href="https://openlist.jinenyy.vip/常用软件/TVBox（家庭看剧必备软件）">
     点击下载TVBox（自带配置版） 
  </a>
   <br>

# tvbox软件配置地址
https://gitee.com/jinenyy/tvbox/raw/master/tvbox.json
   
# tvbox配置教程
   <br>
   <a href="https://jinenyy.vip/app/tvbox/%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html">
     点击查看配置教程 
  </a>
   <br>



## 不管你是（Tvbox）还是（Catbox）还是（影视仓）

其他的开源都是来自Tvbox的开源改版，所以市面上出现各种版本，其实都可以配置使用，只是有些版本他自己内置了配置而已，所以我这次做的版本也是内置了这里的配置的




## 配置方法

打开软件找到设置。如图<a href="https://imgse.com/i/pPcWRGF"><img src="https://s1.ax1x.com/2023/09/10/pPcWRGF.jpg" alt="pPcWRGF.jpg" border="0"></a>再找到配置地址位置
<a href="https://imgse.com/i/pPcWc5T"><img src="https://s1.ax1x.com/2023/09/10/pPcWc5T.jpg" alt="pPcWc5T.jpg" border="0"></a>将你复制来的地址黏贴进去
<a href="https://imgse.com/i/pPcW6aV"><img src="https://s1.ax1x.com/2023/09/10/pPcW6aV.jpg" alt="pPcW6aV.jpg" border="0"></a>然后点击确定，最后返回主页即可看到配置成功页面
<a href="https://imgse.com/i/pPcW2PU"><img src="https://s1.ax1x.com/2023/09/10/pPcW2PU.jpg" alt="pPcW2PU.jpg" border="0"></a>



## 此配置所有tvbox开源的可用


## 文件目录讲解
<br>
json文件为一个配置的文件，而软件读取到您的json文件之后再分析里面的站点配置，比如你的本地做一个josn后缀的文件，如：tvbox.json，然后你本地又部署了http访问的插件则192.168.1.1/tvbox.json,比如这是你本地的链接，然后你自己用的，然后你就每次更新json文件里面的站点你就会发现你配置到你的软件里面的配置也会跟着更新你本地的站点更新，如果你懒得更新的话就用我默认的配置，清除软件数据再打开就恢复默认内置的配置了，默认的配置是根据我这里的项目更新的。
<br>
jar文件目录作为所有站点加载的自定义载入jar文件，缺少了这个配置你打开配置里面的站点就是空壳访问，所以我把jar文件放在了lib/jinenge.jar路径了，这个文件里面包含了站点里面是js数据，比如：小苹果这个站点不能用了，而其他某某的站点还是正常的，这时就会更新或者重新做一个jar包来维护了，所以这个jar包的作用是最大的，没有这个文件，你加载成功软件只能看到站点，点击却是空荡荡的，这就是缺少加载这个jar包的重要性。
<br>
tvlive目录为电视直播台目录，以txt格式放着每行一个节目，也可以以m3u后缀作为直播的配置文件，当然里面的直播源也是不定时的实效的，所以大家有什么好的直播地址可以分享给我更新进去默认配置的。
<br>
   <br>
   <a href="https://jinenyy.vip">
     点击这里来我官网查看更多内容
  </a>
   <br>
