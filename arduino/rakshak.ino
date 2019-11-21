#include<SoftwareSerial.h>
#include<String.h>
SoftwareSerial s1(5,6);
int val1[8];
int val2[8];
int total[20];
int count=0;
const int a0=A0;
const int a1=A1,a2=A2,a3=A3,a4=A4,a5=A5,a6=A6,a7=A7;
void setup() {
  Serial.begin(9600);
  s1.begin(9600);
//  Serial.begin(9600);
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
  pinMode(A2,INPUT);
  pinMode(A3,INPUT);
  pinMode(A4,INPUT);
  pinMode(A5,INPUT);
  pinMode(A6,INPUT);
  pinMode(A7,INPUT);
}

void loop() {
  //int total[9];
  String x = "";
  total[0] = analogRead(a0);
  //Serial.print(total[0]);
  delay(10);
  total[1] = analogRead(a1);
  //Serial.print(total[1]);

  delay(10);
  total[2] = analogRead(a2);
    //Serial.print(total[2]);

  delay(10);
  total[3] = analogRead(a3);
    //Serial.print(total[3]);

  delay(10);
  total[4] = analogRead(A4);
    //Serial.print(total[4]);

  delay(10);
  total[5] = analogRead(A5);
    //Serial.print(total[5]);

  delay(10);
  total[6] = analogRead(A6);
    //Serial.print(total[6]);

  delay(10);
  total[7] = analogRead(A7);
    //Serial.print(total[7]);

  int threshold=50;
  int k=0;
  int i;
  for(i=0;i<8;i++)
  {
    if(total[i]>threshold){
      k++;
    }
  }
  if(k>0){
    Serial.print("yes");
    count++;
    Serial.print(count);
  }
  else{
    Serial.print("No");
  }
  x = x + total[0]+ " " + total[1] +" " + total[2] +" " + total[3] +" " + total[4] +" " + total[5] +" " + total[6] +" " + total[7];
  Serial.println(x);
  int text;
  s1.write(102);
  while(s1.available()>0){
  
  text = s1.read();
  if(text == 101){
    for(int i=0 ; i<7 ; i++){
      Serial.write(total[i]);
      s1.write(total[i]);
    }
  }
  }
  delay(1000);
}