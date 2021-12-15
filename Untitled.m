
A=[0 1 0;
   0 0 1;
   -40 -53 -14];
B=[0;
   0;
   1];
C=[41.4 2.3 0]

P_c1 = [-7 -4+3i -4-3i]';
P_c2 = [-15 -8 -7]';

K = acker(A,B,P_c1)
L = [acker(A',C',P_c2)]'

[n,m] = size(B)

N = inv([A B;C 0])*[zeros(3,1);1];
Nx = N(1:3,1);
Nu = N(4,1);

%{
Qc = ctrb(A,B);
R_A=rank(Qc);%能控
eig(A)  %计算特征值，康康是否稳定

p = [-1+j -1-j -2];  %配置的极点位置
[K,prec,message] = place(A,B,p);
%}
%{
A=[0,1;20.6 0];
B=[0;1];
C=[0,1];

Qc = ctrb(A,B);
R_A=rank(Qc);
e_value=eig(A); 
p = [-1.8-2.4j -1.8+2.4j];  %配置的极点位置
[K,prec,message] = place(A,B,p);
%}
