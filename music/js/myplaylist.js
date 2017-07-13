/**
 * Created by 23rd and Walnut
 * www.23andwalnut.com
 * User: Saleem El-Amin
 * Date: 6/8/11
 * Time: 9:39 AM
 */

var myPlaylist = [

];

if(media_array){
    var mediaObj;
    for(var i=0;i<media_array.length; i++){
        var filename = media_array[i].replace(/^.*[\\\/]/, '');
        var ext = filename.substring(filename.lastIndexOf(".")+1).toLowerCase();
        
        if(ext !== 'mp3')continue;

        mediaObj = {};
        mediaObj.mp3 = media_array[i];
        mediaObj.oga = media_array[i];
        mediaObj.title = filename,
        mediaObj.artist = 'Sample',
        mediaObj.rating = 4,
        mediaObj.buy = '#',
        mediaObj.price= '',
        mediaObj.duration = '',
        mediaObj.cover ='mix/1.png'

        myPlaylist.push(mediaObj);
    }
}

