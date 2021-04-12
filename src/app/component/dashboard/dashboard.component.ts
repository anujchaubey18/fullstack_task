import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.counter();
  }
  counter() {
    function animateValue(obj, start = 0, end = null, duration = 7000) {
      if (obj) {
        var textStarting = obj.innerHTML;
        end = end || parseInt(textStarting.replace(/\D/g, ""));
        var range = end - start;
        var minTimer = 50;
        var stepTime = Math.abs(Math.floor(duration / range));
        stepTime = Math.max(stepTime, minTimer);
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
        function run() {
          var now = new Date().getTime();
          var remaining = Math.max((endTime - now) / duration, 0);
          var value = Math.round(end - (remaining * range));
          obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
          if (value == end) {
            clearInterval(timer);
          }
        }
        timer = setInterval(run, stepTime);
        run();
      }
    }
    animateValue(document.getElementById('value1'));
    animateValue(document.getElementById('value2'));
    animateValue(document.getElementById('value3'));
    animateValue(document.getElementById('value4'));
  }
}
