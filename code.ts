import { Observable, Subject, BehaviorSubject, ReplaySubject } from "rxjs";

var subject = new Subject();

subject.subscribe(
  data => addItem("Observer 1 " + data),
  err => addItem(err),
  () => addItem("Observer 1 Completed")
);

subject.next("SUBJECT");

var observer = subject.subscribe(data => addItem("Observer 2 " + data));

subject.next("HOLA MUNDO 2");
subject.next("HOLA MUNDO 3");

observer.unsubscribe();
subject.next("FINAL");

/*******************/

var behaviorSubject = new BehaviorSubject("First");

behaviorSubject.subscribe(
  data => addItem("Observer 1 " + data),
  err => addItem(err),
  () => addItem("Observer 1 Completed")
);

behaviorSubject.next("BEHAVIORSUBJECT");
behaviorSubject.next("Observer 2 is about to subscribe");

var observer2 = behaviorSubject.subscribe(data =>
  addItem("Observer 2 " + data)
);

behaviorSubject.next("HOLA MUNDO 2");
behaviorSubject.next("HOLA MUNDO 3");

observer2.unsubscribe();
behaviorSubject.next("FINAL");

/*******************/

var replaySubject = new ReplaySubject(2);

replaySubject.subscribe(
  data => addItem("Observer 1 " + data),
  err => addItem(err),
  () => addItem("Observer 1 Completed")
);

replaySubject.next("REPLAYSUBJECT");
replaySubject.next("HOLAMUNDO");
replaySubject.next("Observer 2 is about to subscribe");

var observer2 = replaySubject.subscribe(data => addItem("Observer 2 " + data));

replaySubject.next("HOLA MUNDO 2");
replaySubject.next("HOLA MUNDO 3");

observer2.unsubscribe();
replaySubject.next("FINAL");

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
