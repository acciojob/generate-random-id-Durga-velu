function makeid(l) {
  // write your code here
	let res=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,
			Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1
			1,2,3,4,5,6,7,8,9]
	let ans=[]

	for(let i=0;i<l;i++){

		ans.push(res.[Math.floor(Math.random()*res.length])
	}
	return ans
}

// Do not change the code below.
const l = promt("Enter a number.");
alert(makeid(l));
