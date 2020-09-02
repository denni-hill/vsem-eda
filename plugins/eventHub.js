import Vue from 'vue'
export default function (context, inject){
  inject('eventHub', new Vue());
}
