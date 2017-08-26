import { Component, OnInit } from '@angular/core';

interface Shop{
  index:number,
  name:string,
  price:number,
  address:string
}
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
    shops:Array<Shop>;
    firstLine:string;
    constructor() {
      this.getShops()
    }

    getShops(){
     this.shops = [
      {index:1,name:"兰巴赫",price:175,address:"滨海西路479号星海湾广场南侧"},
      {index:2,name:"常连客",price:130,address:"万达金街4-2-1-27号"},
      {index:3,name:"UPPER KITCHEN",price:145,address:"大连市中山区延安路68号"},
      {index:4,name:"品海楼(柏威年店)",price:80,address:"中山路大公街7号中心柏威年五层"},
      {index:5,name:"喜来稀肉",price:90,address:"甘井子区高新园区万达广场金街"},
    ]
    this.firstLine =`第一个店家是：${this.shops[0].name}`
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.shops.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
}

  desc(){
    // 逆序排列 
    this.shops.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    })   
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.shops.sort((a, b) => {
    return Math.random() > 0.3 ? -1 : 1;
  });
  }
    ngOnInit() {
    }

}
