<template>
  <ul class="win-btns">
    <li><a href="javascript:void(0)" class="close"><i></i></a></li>
    <li><a href="javascript:void(0)" class="min"><i></i></a></li>
    <li><a href="javascript:void(0)" class="max"><i></i></a></li>
  </ul>
</template>

<style>
  .win-btns {
    display: block;
    list-style: none;
    width: 52px;
    height: 12px;
    margin: 24px auto;
    padding: 0;
  }
  .win-btns li {
    float: left;
    margin-right: 7px;
  }
  .win-btns li:last-child {
    margin-right: 0;
  }
  .win-btns li a {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-repeat: no-repeat;
  }
  .win-btns li a.close {
    background-color: #FF615A;
    border: 1px solid #DF453F;
  }
  .win-btns li a.min {
    background-color: #FFBD2E;
    border: 1px solid #E0A023;
  }
  .win-btns li a.max {
    background-color: #29CA41;
    border: 1px solid #19AC2C;
  }
  .win-btns li:hover a.close {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6"><path fill="#800200" fill-rlie="evenodd" d="M3 1.8L4.8 0 6 1.2 4.2 3 6 4.8 4.8 6 3 4.2 1.2 6 0 4.8 1.8 3 0 1.2 1.2 0 3 1.8z"/></svg>');
  }
  .win-btns li:hover a.min {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="2"><path fill="#995700" fill-rule="evenodd" d="M0 0h8v2H0z"/></svg>');
  }
  .win-btns li:hover a.max {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7"><path fill="#060" fill-rule="evenodd" d="M6.079 4.364L1.836.12h4.243v4.243zM4.382 6.096H.139V1.853l4.243 4.243z"/></svg>');
  }
</style>