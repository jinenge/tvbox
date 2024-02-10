## 下载地址
   <br>
   <a href="https://jinenge.cn/TVBox.apk">
     点击下载TVBox（进恩哥版） 
  </a>
   <br>
   
# tvbox配置教程



## 不管你是（Tvbox）还是（Catbox）还是（影视仓）

其他的开源都是来自Tvbox的开源改版，所以市面上出现各种版本，其实都可以配置使用，只是有些版本他自己内置了配置而已，所以我这次做的版本也是内置了这里的配置的




## 配置方法

打开软件找到设置。如图<a href="https://imgse.com/i/pPcWRGF"><img src="https://s1.ax1x.com/2023/09/10/pPcWRGF.jpg" alt="pPcWRGF.jpg" border="0"></a>再找到配置地址位置
<a href="https://imgse.com/i/pPcWc5T"><img src="https://s1.ax1x.com/2023/09/10/pPcWc5T.jpg" alt="pPcWc5T.jpg" border="0"></a>将你复制来的地址黏贴进去
<a href="https://imgse.com/i/pPcW6aV"><img src="https://s1.ax1x.com/2023/09/10/pPcW6aV.jpg" alt="pPcW6aV.jpg" border="0"></a>然后点击确定，最后返回主页即可看到配置成功页面
<a href="https://imgse.com/i/pPcW2PU"><img src="https://s1.ax1x.com/2023/09/10/pPcW2PU.jpg" alt="pPcW2PU.jpg" border="0"></a>



## 此配置所有tvbox开源的可用


容器的配置地址：[https://jihulab.com/jinenge/tvbox/-/raw/main/1.json](https://jihulab.com/jinenge/tvbox/-/raw/main/1.json)复制地址或者点击地址复制即可。
我本地github服务器的配置地址：[https://jinenge.cn/1.json](https://jinenge.cn/1.json)复制地址或者点击地址复制即可。

## 文件目录说明
里面的配置根据容器这里的目录读取而来
alist目录的alist.json为内置的alist直连，如果您需要增加或者删除请自行修改

{
  "vodPic": "https://jinenge.cn/image/logo.png",这里是文件夹图标的链接路径，也可以为容器的目录就是./image/logo.png目录
 <br> "drives": 
  [<br>
    {<br>
      "name": "小雅",（这里是你要挂载到tvbox的名称）<br>
      "server": "http://alist.xiaoya.pro",（这里是他人的或者是自己的alist网站地址）<br>
      "search": false（这里是开启读取网站开启或者关闭选择false或者true）<br>
    }, 这里以（，）号为下一行还有，如果下一行没有站点了，那就以（}）为结尾<br>
   <br> 
{<br>
      "name": "觸光",<br>
      "server": "https://pan.ichuguang.com"下面都一样，以此类推<br>
    },<br>
    {<br>
      "name": "进恩哥资源仓库",<br>
      "server": "https://jinenyy.vip"<br>
    }这里没有了，那就是（}）结尾，没有（，）了<br>
  ]<br>
}




<br>
json文件目录对接的位置在所有站点的json文件目录配置。
<br>
jar文件目录作为所有站点加载的自定义载入jar文件，缺少了这个配置你打开配置里面的站点就是空壳访问。
<br>
js目录为每个站点的js搜索引擎数据，比如花猫影视，我设置为huamao.json配置搜索引擎数据。
<br>
tvlive目录为电视直播台目录，以txt格式放着每行一个节目。
<br>
bizhi目录为壁纸目录，可自己根据原本文件名替换壁纸。
