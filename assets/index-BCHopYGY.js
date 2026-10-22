(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,F=2301,Pe=2302,Fe=2303,Ie=2400,I=2401,Le=2402,L=3200,Re=`srgb`,R=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=35048,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,z(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*it}function bt(e){return e*at}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Dt={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:V,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Et,denormalize:Tt},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new U,At=new Ot,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new W,Mt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:R,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[R]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Ft=Pt();function It(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Lt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Rt,zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rt===void 0&&(Rt=qe(`canvas`)),Rt.width=e.width,Rt.height=e.height;let t=Rt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Rt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=It(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(It(t[e]/255)*255):t[e]=It(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bt=0,Vt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ht(r[t].image)):e.push(Ht(r[t]))}else e=Ht(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ht(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Ut=0,Wt=new U,Gt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ot(),this.name=``,this.source=new Vt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wt).x}get height(){return this.source.getSize(Wt).y}get depth(){return this.source.getSize(Wt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=300,Gt.DEFAULT_ANISOTROPY=1;var Kt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let r=new Gt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jt=class extends qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yt=class extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xt=class extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},G=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new U,Qt=new G,$t=new U(0,0,0),en=new U(1,1,1),tn=new U,nn=new U,rn=new U,an=new G,on=new Ot,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ln=0,un=new U,dn=new Ot,fn=new G,pn=new U,mn=new U,hn=new U,gn=new Ot,_n=new U(1,0,0),vn=new U(0,1,0),yn=new U(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new sn,r=new Ot,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new W}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new U(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=st(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=On[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}copyLinearToSRGB(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Ft.workingToColorSpace(Mn.copy(this),e),Math.round(V(Mn.r*255,0,255))*65536+Math.round(V(Mn.g*255,0,255))*256+Math.round(V(Mn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Re){Ft.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ut(kn.h,An.h,t),r=ut(kn.s,An.s,t),i=ut(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new K;K.NAMES=On;var Nn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new K(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new Kt,Kn=new Kt,qn=new Kt,Jn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Qn=new Yn,$n=new U,er=new U,tr=new U,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U,cr=new U;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new U,dr=new H,fr=0,pr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Yn,_r=new U,vr=new U,yr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new G,Sr=new wn,Cr=new U,wr=new Yn,Tr=new Yn,Er=new U,Dr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=He,this.updateRanges=[],this.version=0,this.uuid=ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},kr=new U,Ar=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix4(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyNormalMatrix(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.transformDirection(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new pr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=new U,Mr=new U,Nr=new W,Pr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jr.subVectors(n,t).cross(Mr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(jr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nr.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fr=0,Ir=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Pr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Lr=class extends Ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rr,zr=new U,Br=new U,Vr=new U,Hr=new H,Ur=new H,Wr=new G,Gr=new U,Kr=new U,qr=new U,Jr=new H,Yr=new H,Xr=new H,Zr=class extends wn{constructor(e=new Lr){if(super(),this.isSprite=!0,this.type=`Sprite`,Rr===void 0){Rr=new Dr;let e=new Or(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute(`position`,new Ar(e,3,0,!1)),Rr.setAttribute(`uv`,new Ar(e,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Br.setFromMatrixScale(this.matrixWorld),Wr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-Vr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Qr(Gr.set(-.5,-.5,0),Vr,a,Br,r,i),Qr(Kr.set(.5,-.5,0),Vr,a,Br,r,i),Qr(qr.set(.5,.5,0),Vr,a,Br,r,i),Jr.set(0,0),Yr.set(1,0),Xr.set(1,1);let o=e.ray.intersectTriangle(Gr,Kr,qr,!1,zr);if(o===null&&(Qr(Kr.set(-.5,.5,0),Vr,a,Br,r,i),Yr.set(0,1),o=e.ray.intersectTriangle(Gr,qr,Kr,!1,zr),o===null))return;let s=e.ray.origin.distanceTo(zr);s<e.near||s>e.far||t.push({distance:s,point:zr.clone(),uv:Jn.getInterpolation(zr,Gr,Kr,qr,Jr,Yr,Xr,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qr(e,t,n,r,i,a){Hr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ur.copy(Hr):(Ur.x=a*Hr.x-i*Hr.y,Ur.y=i*Hr.x+a*Hr.y),e.copy(t),e.x+=Ur.x,e.y+=Ur.y,e.applyMatrix4(Wr)}var $r=new U,ei=new U,ti=new U,ni=new U,ri=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($r.copy(this.origin).addScaledVector(this.direction,t),$r.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ei.copy(e).add(t).multiplyScalar(.5),ti.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(ei);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ti),o=ni.dot(this.direction),s=-ni.dot(ti),c=ni.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ei).addScaledVector(ti,d),f}intersectSphere(e,t){if(e.radius<0)return null;$r.subVectors(e.center,this.origin);let n=$r.dot(this.direction),r=$r.dot($r)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$r)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ai=new G,oi=new ri,si=new yr,ci=new U,li=new U,ui=new U,di=new U,fi=new U,pi=new U,mi=new U,hi=new U,J=class extends wn{constructor(e=new Dr,t=new ii){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){pi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(fi.fromBufferAttribute(s,e),a?pi.addScaledVector(fi,r):pi.addScaledVector(fi.sub(t),r))}t.add(pi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),si.copy(n.boundingSphere),si.applyMatrix4(i),oi.copy(e.ray).recast(e.near),!(si.containsPoint(oi.origin)===!1&&(oi.intersectSphere(si,ci)===null||oi.origin.distanceToSquared(ci)>(e.far-e.near)**2))&&(ai.copy(i).invert(),oi.copy(e.ray).applyMatrix4(ai),(n.boundingBox===null||oi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=_i(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=_i(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=_i(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=_i(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function gi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;hi.copy(s),hi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(hi);return l<n.near||l>n.far?null:{distance:l,point:hi.clone(),object:e}}function _i(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,li),e.getVertexPosition(c,ui),e.getVertexPosition(l,di);let u=gi(e,t,n,r,li,ui,di,mi);if(u){let e=new U;Jn.getBarycoord(mi,li,ui,di,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Jn.getNormal(li,ui,di,t.normal),u.face=t,u.barycoord=e}return u}var vi=class extends Gt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yi=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bi=new G,xi=new G,Si=[],Ci=new Yn,wi=new G,Ti=new J,Ei=new yr,Di=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,wi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),Ci.copy(e.boundingBox).applyMatrix4(bi),this.boundingBox.union(Ci)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),Ei.copy(e.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(Ei)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ti.geometry=this.geometry,Ti.material=this.material,Ti.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ei.copy(this.boundingSphere),Ei.applyMatrix4(n),e.ray.intersectsSphere(Ei)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,bi),xi.multiplyMatrices(n,bi),Ti.matrixWorld=xi,Ti.raycast(e,Si);for(let e=0,n=Si.length;e<n;e++){let n=Si[e];n.instanceId=i,n.object=this,t.push(n)}Si.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oi=new yr,ki=new H(.5,.5),Ai=new U,ji=class{constructor(e=new Pr,t=new Pr,n=new Pr,r=new Pr,i=new Pr,a=new Pr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476+ki.distanceTo(e.center),Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ai.x=r.normal.x>0?e.max.x:e.min.x,Ai.y=r.normal.y>0?e.max.y:e.min.y,Ai.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ai)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mi=class extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ni=new U,Pi=new U,Fi=new G,Ii=new ri,Li=new yr,Ri=new U,zi=new U,Bi=class extends wn{constructor(e=new Dr,t=new Mi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ni.fromBufferAttribute(t,e-1),Pi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ni.distanceTo(Pi);e.setAttribute(`lineDistance`,new q(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(r),Li.radius+=i,e.ray.intersectsSphere(Li)===!1)return;Fi.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Fi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Vi(this,e,Ii,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Vi(this,e,Ii,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Vi(this,e,Ii,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Vi(this,e,Ii,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Vi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ni.fromBufferAttribute(s,i),Pi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ni,Pi,Ri,zi)>r)return;Ri.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ri);if(!(c<t.near||c>t.far))return{distance:c,point:zi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Hi=new U,Ui=new U,Wi=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Hi.fromBufferAttribute(t,e),Ui.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Hi.distanceTo(Ui);e.setAttribute(`lineDistance`,new q(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Gi=class extends Gt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ki=class extends Gt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qi=class extends Gt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ji=class extends qi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yi=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zi=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new q(o,3)),this.setAttribute(`normal`,new q(s,3)),this.setAttribute(`uv`,new q(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Qi=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(o,3)),this.setAttribute(`uv`,new q(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class e extends $i{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class e extends Dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new q(i,3)),this.setAttribute(`normal`,new q(i.slice(),3)),this.setAttribute(`uv`,new q(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},na=new U,ra=new U,ia=new U,aa=new Jn,oa=class extends Dr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(it*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=aa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),aa.getNormal(ia),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=aa[c[e]],o=aa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(ia.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:ia.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];na.fromBufferAttribute(a,t),ra.fromBufferAttribute(a,n),d.push(na.x,na.y,na.z),d.push(ra.x,ra.y,ra.z)}this.setAttribute(`position`,new q(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},sa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new G;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(V(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(V(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ca=class extends sa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},la=class extends ca{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ua(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var da=new U,fa=new U,pa=new ua,ma=new ua,ha=new ua,ga=class extends sa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(fa.subVectors(r[0],r[1]).add(r[0]),c=fa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(da.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=da),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),pa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ma.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ha.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(pa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ma.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ha.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(pa.calc(s),ma.calc(s),ha.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _a(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function va(e,t){let n=1-e;return n*n*t}function ya(e,t){return 2*(1-e)*e*t}function ba(e,t){return e*e*t}function xa(e,t,n,r){return va(e,t)+ya(e,n)+ba(e,r)}function Sa(e,t){let n=1-e;return n*n*n*t}function Ca(e,t){let n=1-e;return 3*n*n*e*t}function wa(e,t){return 3*(1-e)*e*e*t}function Ta(e,t){return e*e*e*t}function Ea(e,t,n,r,i){return Sa(e,t)+Ca(e,n)+wa(e,r)+Ta(e,i)}var Da=class extends sa{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,r.x,i.x,a.x,o.x),Ea(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends sa{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,r.x,i.x,a.x,o.x),Ea(e,r.y,i.y,a.y,o.y),Ea(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends sa{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends sa{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends sa{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(xa(e,r.x,i.x,a.x),xa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends sa{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(xa(e,r.x,i.x,a.x),xa(e,r.y,i.y,a.y),xa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends sa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(_a(o,s.x,c.x,l.x,u.x),_a(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},Pa=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:ga,CubicBezierCurve:Da,CubicBezierCurve3:Oa,EllipseCurve:ca,LineCurve:ka,LineCurve3:Aa,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Ma,SplineCurve:Na}),Fa=class extends sa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Pa[n.type]().fromJSON(n))}return this}},Ia=class extends Fa{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ka(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ja(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Da(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Na([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ca(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},La=class extends Ia{constructor(e){super(e),this.uuid=ot(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ia().fromJSON(n))}return this}};function Ra(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=za(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ka(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Va(a,o,n,s,c,l,0),o}function za(e,t,n,r,i){let a;if(i===_o(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=mo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=mo(i/r|0,e[i],e[i+1],a);return a&&ao(a,a.next)&&(ho(a),a=a.next),a}function Ba(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ao(n,n.next)||io(n.prev,n,n.next)===0)){if(ho(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Va(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Za(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ua(e,r,i,a):Ha(e)){t.push(c.i,e.i,l.i),ho(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Wa(Ba(e),t),Va(e,t,n,r,i,a,2)):o===2&&Ga(e,t,n,r,i,a):Va(Ba(e),t,n,r,i,a,1);break}}}function Ha(e){let t=e.prev,n=e,r=e.next;if(io(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&no(i,s,a,c,o,l,m.x,m.y)&&io(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ua(e,t,n,r){let i=e.prev,a=e,o=e.next;if(io(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=$a(p,m,t,n,r),v=$a(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&no(s,u,c,d,l,f,y.x,y.y)&&io(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&no(s,u,c,d,l,f,b.x,b.y)&&io(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&no(s,u,c,d,l,f,y.x,y.y)&&io(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&no(s,u,c,d,l,f,b.x,b.y)&&io(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Wa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ao(r,i)&&oo(r,n,n.next,i)&&uo(r,i)&&uo(i,r)&&(t.push(r.i,n.i,i.i),ho(n),ho(n.next),n=e=i),n=n.next}while(n!==e);return Ba(n)}function Ga(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ro(o,e)){let s=po(o,e);o=Ba(o,o.next),s=Ba(s,s.next),Va(o,t,n,r,i,a,0),Va(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ka(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=za(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(eo(o))}i.sort(qa);for(let e=0;e<i.length;e++)n=Ja(i[e],n);return n}function qa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ja(e,t){let n=Ya(e,t);if(!n)return t;let r=po(n,e);return Ba(r,r.next),Ba(n,n.next)}function Ya(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ao(e,n))return n;do{if(ao(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&to(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);uo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Xa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Xa(e,t){return io(e.prev,e,t.prev)<0&&io(t.next,e,e.next)<0}function Za(e,t,n,r){let i=e;do i.z===0&&(i.z=$a(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Qa(i)}function Qa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function $a(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function eo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function to(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function no(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&to(e,t,n,r,i,a,o,s)}function ro(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!lo(e,t)&&(uo(e,t)&&uo(t,e)&&fo(e,t)&&(io(e.prev,e,t.prev)||io(e,t.prev,t))||ao(e,t)&&io(e.prev,e,e.next)>0&&io(t.prev,t,t.next)>0)}function io(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ao(e,t){return e.x===t.x&&e.y===t.y}function oo(e,t,n,r){let i=co(io(e,t,n)),a=co(io(e,t,r)),o=co(io(n,r,e)),s=co(io(n,r,t));return!!(i!==a&&o!==s||i===0&&so(e,n,t)||a===0&&so(e,r,t)||o===0&&so(n,e,r)||s===0&&so(n,t,r))}function so(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function co(e){return e>0?1:e<0?-1:0}function lo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&oo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function uo(e,t){return io(e.prev,e,e.next)<0?io(e,t,e.next)>=0&&io(e,e.prev,t)>=0:io(e,t,e.prev)<0||io(e,e.next,t)<0}function fo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function po(e,t){let n=go(e.i,e.x,e.y),r=go(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function mo(e,t,n,r){let i=go(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ho(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function go(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _o(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var vo=class{static triangulate(e,t,n=2){return Ra(e,t,n)}},yo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];bo(e),xo(n,e);let a=e.length;t.forEach(bo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,xo(n,t[e]);let o=vo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function bo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function xo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var So=class e extends Dr{constructor(e=new La([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new q(r,3)),this.setAttribute(`uv`,new q(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Co:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!yo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];yo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],te,M=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);j.push(te),M=M.concat(te)}let ne;if(p===0)ne=yo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ne=yo.triangulateShape(e,t)}let N=ne.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<N;e++){let t=ne[e];ce(t[2],t[1],t[0])}for(let e=0;e<N;e++){let t=ne[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Pa[i.type]().fromJSON(i)),new e(r,t.options)}},Co={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function wo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var To=class e extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Eo=class e extends Dr{constructor(e=[new H(0,-.5),new H(.5,0),new H(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=V(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new U,d=new H,f=new U,p=new U,m=new U,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`uv`,new q(o,2)),this.setAttribute(`normal`,new q(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Do=class e extends ta{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Oo=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ko=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ao=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function jo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(No(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(No(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Mo(e){let t={};for(let n=0;n<e.length;n++){let r=jo(e[n]);for(let e in r)t[e]=r[e]}return t}function No(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Po(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var Io={clone:jo,merge:Mo},Lo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ro=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zo=class extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lo,this.fragmentShader=Ro,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=Po(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Kt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new G().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bo=class extends zo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Vo=class extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ho=class extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=L,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Go(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ko=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},qo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Jo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Yo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xo=class extends Ko{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=$o(n,t,g,y,r);i[p]=Zo(x,o,_,b,m)}return i}};function Zo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Qo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function $o(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Zo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Qo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var es=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Go(e.settings)&&(n.settings={inTangents:Wo(e.settings.inTangents,Array),outTangents:Wo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Go(this.settings)&&(ts(this.settings.inTangents,e),ts(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Go(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ts(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}es.prototype.ValueTypeName=``,es.prototype.TimeBufferType=Float32Array,es.prototype.ValueBufferType=Float32Array,es.prototype.DefaultInterpolation=F;var ns=class extends es{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName=`bool`,ns.prototype.ValueBufferType=Array,ns.prototype.DefaultInterpolation=Ne,ns.prototype.InterpolantFactoryMethodLinear=void 0,ns.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};rs.prototype.ValueTypeName=`color`;var is=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};is.prototype.ValueTypeName=`number`;var as=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},os=class extends es{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new as(this.times,this.values,this.getValueSize(),e)}};os.prototype.ValueTypeName=`quaternion`,os.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends es{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName=`string`,ss.prototype.ValueBufferType=Array,ss.prototype.DefaultInterpolation=Ne,ss.prototype.InterpolantFactoryMethodLinear=void 0,ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};cs.prototype.ValueTypeName=`vector`;var ls=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},us=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ds=new G,fs=new U,ps=new U,ms=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fs.setFromMatrixPosition(e.matrixWorld),t.position.copy(fs),ps.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ps),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ds,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hs=new U,gs=new Ot,_s=new U,vs=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hs,gs,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,gs,_s.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hs,gs,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,gs,_s.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new U,bs=new H,xs=new H,Ss=class extends vs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,bs,xs),t.subVectors(xs,bs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cs=class extends vs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=class extends ms{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new ws}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Es=class extends Dr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ds=-90,Os=1,ks=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ss(Ds,Os,e,t);r.layers=this.layers,this.add(r);let i=new Ss(Ds,Os,e,t);i.layers=this.layers,this.add(i);let a=new Ss(Ds,Os,e,t);a.layers=this.layers,this.add(a);let o=new Ss(Ds,Os,e,t);o.layers=this.layers,this.add(o);let s=new Ss(Ds,Os,e,t);s.layers=this.layers,this.add(s);let c=new Ss(Ds,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},As=class extends Ss{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},js=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ms.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ms(){this._document.hidden===!1&&this.reset()}var Ns=`\\[\\]\\.:\\/`,Ps=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fs=`[^\\[\\]\\.:\\/]`,Is=`[^`+Ns.replace(`\\.`,``)+`]`,Ls=`((?:WC+[\\/:])*)`.replace(`WC`,Fs),Rs=`(WCOD+)?`.replace(`WCOD`,Is),zs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fs),Bs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fs),Vs=RegExp(`^`+Ls+Rs+zs+Bs+`$`),Hs=[`material`,`materials`,`bones`,`map`],Us=class{constructor(e,t,n){let r=n||Ws.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ws=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ps,``)}static parseTrackName(e){let t=Vs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Hs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ws.Composite=Us,Ws.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ws.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ws.prototype.GetterByBindingType=[Ws.prototype._getValue_direct,Ws.prototype._getValue_array,Ws.prototype._getValue_arrayElement,Ws.prototype._getValue_toArray],Ws.prototype.SetterByBindingTypeAndVersioning=[[Ws.prototype._setValue_direct,Ws.prototype._setValue_direct_setNeedsUpdate,Ws.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ws.prototype._setValue_array,Ws.prototype._setValue_array_setNeedsUpdate,Ws.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ws.prototype._setValue_arrayElement,Ws.prototype._setValue_arrayElement_setNeedsUpdate,Ws.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ws.prototype._setValue_fromArray,Ws.prototype._setValue_fromArray_setNeedsUpdate,Ws.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Gs(e,t,n,r){let i=Ks(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ks(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function qs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},Ys={basic:{uniforms:Mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Mo([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Mo([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new K(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Mo([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Mo([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Mo([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Mo([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Mo([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Mo([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Mo([X.common,X.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Mo([X.lights,X.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ys.physical={uniforms:Mo([Ys.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Xs={r:0,b:0,g:0},Zs=new G,Qs=new W;Qs.set(-1,0,0,0,1,0,0,0,1);function $s(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new Xi(1,1,1),new zo({name:`BackgroundCubeMaterial`,uniforms:jo(Ys.backgroundCube.uniforms),vertexShader:Ys.backgroundCube.vertexShader,fragmentShader:Ys.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qs),l.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Oo(2,2),new zo({name:`BackgroundMaterial`,uniforms:jo(Ys.background.uniforms),vertexShader:Ys.background.vertexShader,fragmentShader:Ys.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xs,Fo(e)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ec(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function tc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function nc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function rc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Pr,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ic=4,ac=6,oc=20,sc=256,cc=new Cs,lc=new K,uc=null,dc=0,fc=0,pc=!1,mc=new U,hc=new U,gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mc}=i;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:R,depthBuffer:!1},r=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_c(r)),this._blurMaterial=xc(r,e,t),this._ggxMaterial=bc(r,e,t)}return r}_compileMaterial(e){let t=new J(new Dr,e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ss(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Xi,new ii({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;yc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;yc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ic?n-d+ic:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,yc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,cc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,yc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,cc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];yc(t,3*l*(r>this._lodMax-ic?r-this._lodMax+ic:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,cc)}};function _c(e){let t=[],n=[],r=e,i=e-ic+1+ac;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?hc.set(1,r,n):e===1?hc.set(-n,1,-r):e===2?hc.set(-n,r,1):e===3?hc.set(-1,r,-n):e===4?hc.set(-n,-1,r):hc.set(n,r,-1),hc.toArray(l,(e*6+t)*3)}}let u=new Dr;u.setAttribute(`position`,new pr(c,3)),u.setAttribute(`outputDirection`,new pr(l,3)),n.push(new J(u,null)),r>ic&&r--}return{lodMeshes:n,sizeLods:t}}function vc(e,t,n){let r=new Jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function yc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function bc(e,t,n){return new zo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:sc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(e,t,n){return new zo({name:`SphericalGaussianBlur`,defines:{SAMPLES:oc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return new zo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return new zo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tc=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Gi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),i=new zo({name:`CubemapFromEquirect`,uniforms:jo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ks(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ec(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Tc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Dc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Oc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?hr:mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function kc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jc(e,t,n){let r=new WeakMap,i=new Kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Yt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Mc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Nc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pc(e,t,n,r,i,a){let o=new Jt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Dr;l.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let u=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new Cs(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Jt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ft.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Nc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Fc=new Gt,Ic=new qi(1,1),Lc=new Yt,Rc=new Xt,zc=new Gi,Bc=[],Vc=[],Hc=new Float32Array(16),Uc=new Float32Array(9),Wc=new Float32Array(4);function Gc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bc[i];if(a===void 0&&(a=new Float32Array(i),Bc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Kc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Jc(e,t){let n=Vc[t];n===void 0&&(n=new Int32Array(t),Vc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2fv(this.addr,t),qc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Kc(n,t))return;e.uniform3fv(this.addr,t),qc(n,t)}}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4fv(this.addr,t),qc(n,t)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Wc.set(r),e.uniformMatrix2fv(this.addr,!1,Wc),qc(n,r)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Uc.set(r),e.uniformMatrix3fv(this.addr,!1,Uc),qc(n,r)}}function tl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Hc.set(r),e.uniformMatrix4fv(this.addr,!1,Hc),qc(n,r)}}function nl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2iv(this.addr,t),qc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kc(n,t))return;e.uniform3iv(this.addr,t),qc(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4iv(this.addr,t),qc(n,t)}}function ol(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2uiv(this.addr,t),qc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kc(n,t))return;e.uniform3uiv(this.addr,t),qc(n,t)}}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4uiv(this.addr,t),qc(n,t)}}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ic.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ic):a=Fc,n.setTexture2D(t||a,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Rc,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||zc,i)}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Lc,i)}function ml(e){switch(e){case 5126:return Yc;case 35664:return Xc;case 35665:return Zc;case 35666:return Qc;case 35674:return $c;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return rl;case 35668:case 35672:return il;case 35669:case 35673:return al;case 5125:return ol;case 36294:return sl;case 36295:return cl;case 36296:return ll;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return fl;case 36289:case 36303:case 36311:case 36292:return pl}}function hl(e,t){e.uniform1fv(this.addr,t)}function gl(e,t){let n=Gc(t,this.size,2);e.uniform2fv(this.addr,n)}function _l(e,t){let n=Gc(t,this.size,3);e.uniform3fv(this.addr,n)}function vl(e,t){let n=Gc(t,this.size,4);e.uniform4fv(this.addr,n)}function yl(e,t){let n=Gc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bl(e,t){let n=Gc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xl(e,t){let n=Gc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sl(e,t){e.uniform1iv(this.addr,t)}function Cl(e,t){e.uniform2iv(this.addr,t)}function wl(e,t){e.uniform3iv(this.addr,t)}function Tl(e,t){e.uniform4iv(this.addr,t)}function El(e,t){e.uniform1uiv(this.addr,t)}function Dl(e,t){e.uniform2uiv(this.addr,t)}function Ol(e,t){e.uniform3uiv(this.addr,t)}function kl(e,t){e.uniform4uiv(this.addr,t)}function Al(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ic:Fc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Rc,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||zc,a[e])}function Nl(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Lc,a[e])}function Pl(e){switch(e){case 5126:return hl;case 35664:return gl;case 35665:return _l;case 35666:return vl;case 35674:return yl;case 35675:return bl;case 35676:return xl;case 5124:case 35670:return Sl;case 35667:case 35671:return Cl;case 35668:case 35672:return wl;case 35669:case 35673:return Tl;case 5125:return El;case 36294:return Dl;case 36295:return Ol;case 36296:return kl;case 35678:case 36198:case 36298:case 36306:case 35682:return Al;case 35679:case 36299:case 36307:return jl;case 35680:case 36300:case 36308:case 36293:return Ml;case 36289:case 36303:case 36311:case 36292:return Nl}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ml(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pl(t.type)}},Ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function zl(e,t){e.seq.push(t),e.map[t.id]=t}function Bl(e,t,n){let r=e.name,i=r.length;for(Rl.lastIndex=0;;){let a=Rl.exec(r),o=Rl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zl(n,l===void 0?new Fl(s,e,t):new Il(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ll(s),zl(n,e)),n=e}}}var Vl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Bl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ul=37297,Wl=0;function Gl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Kl=new W;function ql(e){Ft._getMatrix(Kl,Ft.workingColorSpace,e);let t=`mat3( ${Kl.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Jl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gl(e.getShaderSource(t),r)}return i}function Yl(e,t){let n=ql(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Xl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zl(e,t){let n=Xl[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ql=new U;function $l(){return Ft.getLuminanceCoefficients(Ql),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ql.x.toFixed(4)}, ${Ql.y.toFixed(4)}, ${Ql.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function eu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ru).join(`
`)}function tu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ru(e){return e!==``}function iu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ou=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(e){return e.replace(ou,lu)}var cu=new Map;function lu(e,t){let n=Y[t];if(n===void 0){let e=cu.get(t);if(e!==void 0)n=Y[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return su(n)}var uu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(e){return e.replace(uu,fu)}function fu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var mu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function hu(e){return mu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var gu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function _u(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:gu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var vu={302:`ENVMAP_MODE_REFRACTION`};function yu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:vu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var bu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function xu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:bu[e.combine]||`ENVMAP_BLENDING_NONE`}function Su(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Cu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=hu(n),l=_u(n),u=yu(n),d=xu(n),f=Su(n),p=eu(n),m=tu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ru).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ru).join(`
`),_.length>0&&(_+=`
`)):(g=[pu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ru).join(`
`),_=[pu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Zl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Yl(`linearToOutputTexel`,n.outputColorSpace),$l(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ru).join(`
`)),o=su(o),o=iu(o,n),o=au(o,n),s=su(s),s=iu(s,n),s=au(s,n),o=du(o),s=du(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Hl(i,i.VERTEX_SHADER,y),S=Hl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Jl(i,x,`vertex`),n=Jl(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Vl(i,h),T=nu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ul)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var wu=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=wu++,this.code=e,this.usedTimes=0}};function Du(e){return e===1030||e===37490||e===36285}function Ou(e,t,n,r,i,a){let o=new cn,s=new Tu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ys[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Du(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Ft.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ys[t];n=Io.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Cu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ku(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Au),r.length>1&&r.sort(t||ju),i.length>1&&i.sort(t||ju)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Nu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Mu,e.set(t,[i])):n>=r.length?(i=new Mu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new K};break;case`SpotLight`:n={position:new U,direction:new U,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Iu=0;function Lu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ru(e){let t=new Pu,n=Fu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new G,o=new G;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Lu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Iu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function zu(e){let t=new Ru(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Bu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new zu(e),t.set(n,[a])):r>=i.length?(a=new zu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uu=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Wu=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Gu=new G,Ku=new U,qu=new U;function Ju(e,t,n){let i=new ji,a=new H,s=new H,c=new Kt,l=new Ho,u=new Uo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new zo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Vu,fragmentShader:Hu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Jt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new qi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Tc(a.x),p.map.depthTexture=new Ji(a.x,m)):(p.map=new Jt(a.x,a.y),p.map.depthTexture=new qi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ku.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ku),qu.copy(e.position),qu.add(Uu[t]),e.up.copy(Wu[t]),e.lookAt(qu),e.updateMatrixWorld(),n.makeTranslation(-Ku.x,-Ku.y,-Ku.z),Gu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Gu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Jt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Yu(e,t){function n(){let t=!1,n=new Kt,r=null,i=new Kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Kt().fromArray(ie),se=new Kt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function R(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:R}}function Xu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):qe(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:Ft.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&F(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ft.getPrimaries(Ft.workingColorSpace),n=t.colorSpace===``?null:Ft.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Pe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Gs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Gs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Fe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Fe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Ft.getPrimaries(Ft.workingColorSpace),o=t.colorSpace===``?null:Ft.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Pe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Fe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Me(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=Me(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ne(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Me(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(e){if(e.samples>0){if(Ne(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(ke.push(a),Ae.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ae)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ft.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Zu(e,t){function n(n,r=``){let i,a=Ft.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Qu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$u=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zo({vertexShader:Qu,fragmentShader:$u,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new ed,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=null,ee=new Ss;ee.viewport=new Kt;let j=new Ss;j.viewport=new Kt;let te=[ee,j],M=new As,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Jt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new qi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new U,se=new U;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;le(M,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),P(e,M,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Ss,o.layers.enable(n),o.viewport=new Kt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Yi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let fe=new qs;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},nd=new G,rd=new W;rd.set(-1,0,0,0,1,0,0,0,1);function id(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(nd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(rd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ad(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var od=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sd=null;function cd(){return sd===null&&(sd=new vi(od,16,16,k,g),sd.name=`DFG_LUT`,sd.minFilter=o,sd.magFilter=o,sd.wrapS=t,sd.wrapT=t,sd.generateMipmaps=!1,sd.needsUpdate=!0),sd}var ld=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Re;let ce=0,le=0,P=null,ue=-1,de=null,fe=new Kt,pe=new Kt,me=null,he=new K(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new Kt(0,0,_e,ve),Ce=new Kt(0,0,_e,ve),we=!1,Te=new ji,Ee=!1,De=!1,Oe=new G,ke=new U,Ae=new Kt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,R,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),B(`WebGLRenderer: `+e.message),e}function ot(){Fe=new Dc(F),Fe.init(),rt=new Zu(F,Fe),Ie=new nc(F,Fe,e,rt),I=new Yu(F,Fe),Ie.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new Ac(F),L=new ku,R=new Xu(F,Fe,I,L,Ie,rt,Le),ze=new Ec(N),Be=new Js(F),it=new ec(F,Be),Ve=new Oc(F,Be,Le,it),He=new Mc(F,Ve,Be,it,Le),et=new jc(F,Ie,R),Ye=new rc(L),Ue=new Ou(N,ze,Fe,Ie,it,Ye),Ge=new id(N,L),Ke=new Nu,qe=new Bu(Fe),Qe=new $s(N,ze,I,He,x,s),Ze=new Ju(N,He,Ie),at=new ad(F,Le,Ie,I),tt=new tc(F,Fe,Le),nt=new kc(F,Fe,Le),Le.programs=Ue.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=L,N.renderLists=Ke,N.shadowMap=Ze,N.state=I,N.info=Le}S!==1009&&(ne=new Pc(S,t.width,t.height,o,r,i));let V=new td(N,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(V.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),ze.dispose(),He.dispose(),it.dispose(),at.dispose(),Ue.dispose(),V.dispose(),V.removeEventListener(`sessionstart`,gt),V.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),re=!0}function ct(){Xe(`WebGLRenderer: Context Restored.`),re=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),L.remove(e)}function ft(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=H(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=qe.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),ie!==null&&Ze.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new qs;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,V.setAnimationLoop(e),e===null?vt.stop():vt.start()},V.addEventListener(`sessionstart`,gt),V.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=V.enabled===!0&&V.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(t),t=V.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=qe.get(e,M.length),j.init(t),j.state.textureUnits=R.getTextureUnits(),M.push(j),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,We,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),k=Ke.get(e,te.length),k.init(),te.push(k),V.enabled===!0&&V.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Me=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Me&&Qe.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Me&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(k,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Me&&Qe.render(e),bt(k,e,t)}P!==null&&le===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),it.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],R.setTextureUnits(j.state.textureUnits),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=He.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Jt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Me&&Qe.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,r),St(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ue.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function H(e,t,n,r,i){t.isScene!==!0&&(t=je),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ft.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=Dt(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,R),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,R),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,R),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=cd()),C){if(T.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Vl.upload(F,Tt(v),E,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vl.upload(F,Tt(v),E,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function At(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $e(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}},ud={eyeHeight:1.66,radius:.34,baseRunSpeed:9,maxRunSpeed:15.5,absoluteMaxRunSpeed:17.5,pushMultiplier:1.1,easeMultiplier:.6,sprintMultiplier:1.38,exhaustedMultiplier:.86,forwardAcceleration:7,forwardDeceleration:11,strafeSpeed:7.5,strafeAcceleration:36,strafeDeceleration:30,jumpVelocity:7.4,gravity:21,coyoteTime:.12,jumpBuffer:.14,corridorHalfWidth:10,hitInvulnerability:1,stumbleSpeedMultiplier:.35,stumbleDuration:1.1},dd={chance:.5,impactAt:.55,feetDecel:10,slideDecel:15,pushUpAt:2.2,kneelAt:3.4,standAt:4.1,duration:5,extraDamage:0},fd={max:100,shotDamage:34,regenDelay:9,regenPerSecond:5},pd={max:100,runDrain:.55,sprintDrain:15,easeRegen:5,sprintMinimum:10,exhaustedRecover:18,exhaustedRegen:1.2},md={fov:72,sprintFovBoost:7,bobAmplitude:.055,swayAmplitude:.035,strafeRoll:.035,maxYaw:1.15,maxPitch:.7,recenterSpeed:.6,lookBackYaw:2.6},hd={startGap:70,maxGap:130,speedFactorStart:.92,speedFactorMax:.985,speedFactorCap:.998,dangerGap:22,glimpseCooldown:24,fireRange:15.24,fireInterval:[1.5,2.8],hitChanceFar:.22,hitChanceNear:.55,dodgeBonus:.22,cueIntervalFar:9,cueIntervalNear:2.2},gd={rampDistance:2400,lateRampStart:4500,lateRampDistance:9e3,lateMax:.45,rowSpacingEasy:24,rowSpacingHard:12,rowSpacingMin:9.5,obstaclesPerRowEasy:1.5,obstaclesPerRowHard:3.6,safePathWidthEasy:4.6,safePathWidthHard:3,safePathWidthMin:2.5,routeShiftSafety:.55,graceDistance:70},_d={chancePerRow:.5,weights:{mapPiece:58,water:16,food:14,horseshoe:6,lantern:6},mapPieceTrailLength:[3,6],pickupRadius:1.2,waterStamina:38,foodStamina:16,horseshoeDuration:6,horseshoeMultiplier:1.22,lanternDuration:22,piecesPerRouteFragment:10},vd={chunkLength:40,chunksAhead:8,chunksBehind:2,groundWidth:420,transitionLength:320},yd={artilleryIntervalEasy:9,artilleryIntervalHard:3.6,artilleryIntervalMin:2.6,artilleryWarning:1.6,artilleryBlastRadius:4.2,artilleryGapPenalty:16,waterSlow:.7,mudSlow:.58},bd={defaultQuality:`high`,shadowMapSize:{high:2048,medium:1024,low:0},maxPixelRatio:{high:2,medium:1.25,low:1},bloom:{high:!0,medium:!0,low:!1}},xd=(e,t,n)=>e<t?t:e>n?n:e,Sd=(e,t,n)=>e+(t-e)*n,Cd=(e,t,n)=>t===e?0:xd((n-e)/(t-e),0,1),wd=(e,t,n)=>{let r=Cd(e,t,n);return r*r*(3-2*r)},Td=(e,t,n,r)=>Sd(e,t,1-Math.exp(-n*r)),Ed=(e,t,n)=>e<t?Math.min(e+n,t):Math.max(e-n,t),Dd=e=>`${Math.floor(e).toLocaleString(`en-US`)} m`,Od=(e,t)=>e+Math.random()*(t-e);function kd(e,t,n,r,i){let a=.35*i,o=e.osc(`sine`,r===`wood`?Od(150,190):Od(70,95)),s=e.gain(0);o.frequency.exponentialRampToValueAtTime(40,n+.12),e.chain(o,s,t),e.envelope(s.gain,n,.004,r===`wood`?.16:.09,a*(r===`wood`?.9:.7)),o.start(n),o.stop(n+.25);let c=e.noise(r===`mud`||r===`water`?`brown`:`white`),[l,u,d,f]={dirt:[`bandpass`,650,.9,.07],grass:[`highpass`,2400,.5,.09],mud:[`lowpass`,500,2,.16],water:[`bandpass`,1400,.6,.22],wood:[`bandpass`,900,2.5,.05]}[r],p=e.filter(l,u*Od(.85,1.15),d),m=e.gain(0);if(e.chain(c,p,m,t),e.envelope(m.gain,n,.005,f,a*(r===`water`?1.3:.9)),c.start(n,Math.random()*2),c.stop(n+f+.1),r===`mud`){let r=e.osc(`sine`,220),i=e.gain(0);r.frequency.setValueAtTime(140,n+.05),r.frequency.exponentialRampToValueAtTime(420,n+.16),e.chain(r,e.filter(`lowpass`,600),i,t),e.envelope(i.gain,n+.05,.02,.1,a*.25),r.start(n+.05),r.stop(n+.3)}}function Ad(e,t,n,r,i,a){let o=e.noise(`pink`),s=e.filter(`bandpass`,r?1500:1e3,1.2),c=e.filter(`lowpass`,3200+i*1500),l=e.gain(0);e.chain(o,s,c,l,t);let u=(r?.16:.24)*(.35+i);l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(u,n+a*.3),l.gain.exponentialRampToValueAtTime(1e-4,n+a),o.start(n,Math.random()*2),o.stop(n+a+.05)}function jd(e,t,n,r,i){let a=e.osc(`sawtooth`,r);a.frequency.exponentialRampToValueAtTime(r*.7,n+.22);let o=e.filter(`bandpass`,700,3),s=e.filter(`bandpass`,1150,4),c=e.gain(1),l=e.gain(0);a.connect(o),a.connect(s),o.connect(c),s.connect(c),e.chain(c,e.filter(`lowpass`,2200),l,t),e.envelope(l.gain,n,.015,.22,.16*i),a.start(n),a.stop(n+.35),Ad(e,t,n,!1,i,.25)}function Md(e,t,n,r,i){let a=e.osc(`sine`,90);a.frequency.exponentialRampToValueAtTime(35,n+.25);let o=e.gain(0);e.chain(a,o,t),e.envelope(o.gain,n,.003,.3,.9*i),a.start(n),a.stop(n+.4);let s=e.noise(`white`),c=e.filter(r?`bandpass`:`lowpass`,r?1800:900,r?1.5:.7),l=e.gain(0);if(e.chain(s,c,l,t),e.envelope(l.gain,n,.002,r?.12:.2,.55*i),s.start(n),s.stop(n+.3),r)for(let r=0;r<5;r++){let a=e.noise(`white`),o=e.filter(`bandpass`,Od(2e3,4500),4),s=e.gain(0);e.chain(a,o,s,t);let c=n+.02+r*Od(.015,.04);e.envelope(s.gain,c,.001,.03,.25*i),a.start(c,Math.random()),a.stop(c+.06)}}function Nd(e,t,n,r){if(r===`mapPiece`){for(let r=0;r<6;r++){let i=e.noise(`white`),a=e.filter(`bandpass`,Od(3e3,6e3),2),o=e.gain(0);e.chain(i,a,o,t);let s=n+r*Od(.01,.03);e.envelope(o.gain,s,.001,.025,.12),i.start(s,Math.random()),i.stop(s+.05)}let r=e.osc(`sine`,392),i=e.gain(0);e.chain(r,i,t),e.envelope(i.gain,n,.02,.5,.05),r.start(n),r.stop(n+.6)}else if(r===`water`){let r=e.noise(`brown`),i=e.filter(`bandpass`,700,3);i.frequency.setValueAtTime(400,n),i.frequency.linearRampToValueAtTime(1100,n+.15),i.frequency.linearRampToValueAtTime(500,n+.32);let a=e.gain(0);e.chain(r,i,a,t),e.envelope(a.gain,n,.03,.35,.5),r.start(n,Math.random()),r.stop(n+.45),Ad(e,t,n+.25,!1,.6,.5)}else if(r===`horseshoe`)for(let[r,i]of[[1840,.08],[2950,.05],[4410,.03]]){let a=e.osc(`sine`,r),o=e.gain(0);e.chain(a,o,t),e.envelope(o.gain,n,.001,.6,i),a.start(n),a.stop(n+.7)}else if(r===`lantern`){let r=e.osc(`sine`,2600),i=e.gain(0);e.chain(r,i,t),e.envelope(i.gain,n,.001,.25,.05),r.start(n),r.stop(n+.3);let a=e.noise(`pink`),o=e.gain(0);e.chain(a,e.filter(`lowpass`,900),o,t),e.envelope(o.gain,n+.05,.08,.4,.15),a.start(n,Math.random()),a.stop(n+.6)}else{let r=e.noise(`white`),i=e.gain(0);e.chain(r,e.filter(`highpass`,2500),i,t),e.envelope(i.gain,n,.03,.18,.12),r.start(n,Math.random()),r.stop(n+.3)}}function Pd(e,t,n){let r=Math.random()<.5?1:2;for(let i=0;i<r;i++){let r=n+i*Od(.35,.5),a=Od(150,230),o=e.osc(`sawtooth`,a);o.frequency.setValueAtTime(a*.9,r),o.frequency.linearRampToValueAtTime(a*1.12,r+.12),o.frequency.linearRampToValueAtTime(a*.85,r+.45);let s=e.osc(`sine`,6),c=e.gain(a*.02);s.connect(c),c.connect(o.frequency);let[l,u]=Math.random()<.5?[750,1150]:[550,900],d=e.filter(`bandpass`,l,5),f=e.filter(`bandpass`,u,6),p=e.gain(1);o.connect(d),o.connect(f),d.connect(p),f.connect(p);let m=e.gain(0);e.chain(p,m,t),m.gain.setValueAtTime(1e-4,r),m.gain.linearRampToValueAtTime(.5,r+.05),m.gain.setValueAtTime(.45,r+.3),m.gain.exponentialRampToValueAtTime(1e-4,r+.55),o.start(r),s.start(r),o.stop(r+.6),s.stop(r+.6)}}function Fd(e,t,n){if(Math.random()<.35){let r=e.osc(`sawtooth`,380);r.frequency.setValueAtTime(330,n),r.frequency.linearRampToValueAtTime(520,n+.35),r.frequency.linearRampToValueAtTime(400,n+1.1);let i=e.filter(`bandpass`,900,3),a=e.gain(0);e.chain(r,i,e.filter(`lowpass`,2e3),a,t),a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.35,n+.15),a.gain.setValueAtTime(.3,n+.8),a.gain.exponentialRampToValueAtTime(1e-4,n+1.2),r.start(n),r.stop(n+1.3);return}let r=2+Math.floor(Math.random()*3);for(let i=0;i<r;i++){let r=n+i*Od(.18,.3),a=e.osc(`square`,Od(420,560));a.frequency.exponentialRampToValueAtTime(220,r+.1);let o=e.filter(`bandpass`,1100,2),s=e.gain(0);e.chain(a,o,s,t),e.envelope(s.gain,r,.005,.11,.35),a.start(r),a.stop(r+.15);let c=e.noise(`white`),l=e.gain(0);e.chain(c,e.filter(`bandpass`,1500,1),l,t),e.envelope(l.gain,r,.002,.06,.2),c.start(r,Math.random()),c.stop(r+.1)}}function Id(e,t,n,r=1.6){for(let i=0;i<r;i+=.36)for(let r of[0,.07,.15]){let a=n+i+r+Od(-.01,.01),o=e.noise(`brown`),s=e.filter(`lowpass`,380,1),c=e.gain(0);e.chain(o,s,c,t),e.envelope(c.gain,a,.003,.08,.55),o.start(a,Math.random()),o.stop(a+.12)}if(Math.random()<.4){let i=e.noise(`pink`),a=e.gain(0);e.chain(i,e.filter(`bandpass`,600,1.5),a,t),e.envelope(a.gain,n+r*.5,.05,.3,.25),i.start(n+r*.5,Math.random()),i.stop(n+r*.5+.4)}}function Ld(e,t,n){let r=e.osc(`sine`,1900);r.frequency.setValueAtTime(1500,n),r.frequency.linearRampToValueAtTime(2300,n+.25),r.frequency.setValueAtTime(2300,n+.4),r.frequency.linearRampToValueAtTime(1700,n+.6);let i=e.gain(0);e.chain(r,i,t),i.gain.setValueAtTime(1e-4,n),i.gain.linearRampToValueAtTime(.12,n+.05),i.gain.setValueAtTime(.1,n+.5),i.gain.exponentialRampToValueAtTime(1e-4,n+.65),r.start(n),r.stop(n+.7)}function Rd(e,t,n,r=1){let i=e.noise(`white`),a=e.gain(0);e.chain(i,e.filter(`lowpass`,5e3),a,t),e.envelope(a.gain,n,.001,.18,.8*r),i.start(n,Math.random()),i.stop(n+.3);let o=e.osc(`sine`,110);o.frequency.exponentialRampToValueAtTime(40,n+.2);let s=e.gain(0);e.chain(o,s,t),e.envelope(s.gain,n,.002,.25,.6*r),o.start(n),o.stop(n+.35);let c=e.noise(`brown`),l=e.gain(0);e.chain(c,e.filter(`lowpass`,400),l,t),e.envelope(l.gain,n+.02,.05,1,.25*r),c.start(n,Math.random()),c.stop(n+1.2)}function zd(e,t,n,r=1){let i=e.osc(`sine`,62);i.frequency.exponentialRampToValueAtTime(28,n+.8);let a=e.gain(0);e.chain(i,a,t),e.envelope(a.gain,n,.005,1.4,1*r),i.start(n),i.stop(n+1.6);let o=e.noise(`brown`),s=e.gain(0);e.chain(o,e.filter(`lowpass`,260,.8),s,t),e.envelope(s.gain,n,.01,2.6,.9*r),o.start(n,Math.random()),o.stop(n+2.8);let c=e.noise(`white`),l=e.gain(0);e.chain(c,e.filter(`lowpass`,2500),l,t),e.envelope(l.gain,n,.001,.12,.6*r),c.start(n,Math.random()),c.stop(n+.2)}function Bd(e,t,n,r){let i=e.osc(`sine`,1900);i.frequency.setValueAtTime(1900,n),i.frequency.exponentialRampToValueAtTime(520,n+r);let a=e.gain(0);e.chain(i,a,t),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.18,n+r*.9),a.gain.exponentialRampToValueAtTime(1e-4,n+r+.02),i.start(n),i.stop(n+r+.05);let o=e.noise(`white`),s=e.gain(0),c=e.filter(`bandpass`,2e3,3);c.frequency.exponentialRampToValueAtTime(600,n+r),e.chain(o,c,s,t),s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.12,n+r),s.gain.exponentialRampToValueAtTime(1e-4,n+r+.02),o.start(n,Math.random()),o.stop(n+r+.05)}function Vd(e,t,n,r=1){zd(e,t,n,1.2*r);for(let i=0;i<14;i++){let i=n+.25+Math.random()*1.1,a=e.noise(`white`),o=e.gain(0);e.chain(a,e.filter(`bandpass`,Od(800,2500),1.2),o,t),e.envelope(o.gain,i,.002,.05,.12*r),a.start(i,Math.random()),a.stop(i+.08)}}function Hd(e,t,n){let r=e.noise(`white`),i=e.filter(`bandpass`,4e3,6);i.frequency.setValueAtTime(5500,n),i.frequency.exponentialRampToValueAtTime(1400,n+.18);let a=e.gain(0);e.chain(r,i,a,t),e.envelope(a.gain,n,.03,.15,.35),r.start(n,Math.random()),r.stop(n+.25);let o=e.noise(`brown`),s=e.gain(0);e.chain(o,e.filter(`lowpass`,900),s,t),e.envelope(s.gain,n+.16,.002,.12,.35),o.start(n+.16,Math.random()),o.stop(n+.35)}function Ud(e,t,n,r){for(let[i,a]of[[0,1],[.16,.7]]){let o=e.osc(`sine`,52);o.frequency.exponentialRampToValueAtTime(34,n+i+.12);let s=e.gain(0);e.chain(o,e.filter(`lowpass`,120),s,t),e.envelope(s.gain,n+i,.01,.16,.7*a*r),o.start(n+i),o.stop(n+i+.25)}}function Wd(e,t,n,r){if(r>.65){let i=e.noise(`white`),a=e.gain(0);e.chain(i,e.filter(`lowpass`,3e3),a,t),e.envelope(a.gain,n,.005,.35,.6*r),i.start(n,Math.random()),i.stop(n+.5)}let i=e.noise(`brown`),a=e.filter(`lowpass`,180,.7),o=e.gain(0);e.chain(i,a,o,t);let s=3+r*3;o.gain.setValueAtTime(1e-4,n);let c=n;for(let e=0;e<4;e++){let t=(.9-e*.18)*r;o.gain.linearRampToValueAtTime(Math.max(.02,t),c+.15+Math.random()*.3),c+=s/4,o.gain.linearRampToValueAtTime(Math.max(.01,t*.4),c)}o.gain.exponentialRampToValueAtTime(1e-4,n+s+1),i.start(n,Math.random()),i.stop(n+s+1.2)}function Gd(e,t,n){for(let[r,i]of[[65.4,.35],[98,.25],[130.8,.18],[155.6,.12]])for(let a of[-5,5]){let o=e.osc(`sawtooth`,r);o.detune.value=a;let s=e.filter(`lowpass`,500,.5);s.frequency.setValueAtTime(250,n),s.frequency.linearRampToValueAtTime(900,n+2.5),s.frequency.linearRampToValueAtTime(300,n+6);let c=e.gain(0);e.chain(o,s,c,t),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(i*.25,n+2.2),c.gain.exponentialRampToValueAtTime(1e-4,n+6.5),o.start(n),o.stop(n+6.6)}}var Kd=(e,t)=>e+Math.random()*(t-e),qd=class{s;out;reverb;layers={};droneVoices=[];wanderers=[];tensionGain;tensionOsc;profile={wind:0,birds:0,insects:0,frogs:0,water:0,trees:0,battle:0,fire:0,drone:0,dronePitch:55};timers={};danger=0;constructor(e,t,n){this.s=e,this.out=t,this.reverb=n;let r=e.now;this.loop(`wind`,`brown`,[e.filter(`lowpass`,420,.5)],.5,e=>this.wander(e[0].frequency,250,700,7));let i=this.loop(`insects`,`white`,[e.filter(`bandpass`,4800,6)],.25),a=e.osc(`sine`,38),o=e.gain(.5);a.connect(o),o.connect(i.gain),a.start(r),this.loop(`water`,`pink`,[e.filter(`bandpass`,700,.8)],.5,e=>this.wander(e[0].frequency,450,1100,3)),this.loop(`trees`,`pink`,[e.filter(`highpass`,1800,.5)],.18),this.loop(`battle`,`brown`,[e.filter(`lowpass`,140,.7)],1.1),this.loop(`rain`,`pink`,[e.filter(`highpass`,500,.5),e.filter(`lowpass`,7500,.5)],.7),this.loop(`rainLow`,`brown`,[e.filter(`lowpass`,600,.6)],.5),this.loop(`fire`,`brown`,[e.filter(`bandpass`,300,.6)],.4);let s=e.gain(0),c=e.filter(`lowpass`,380,.6);c.connect(s),s.connect(t);for(let[t,n]of[[1,-6],[1,5],[1.5,3],[.5,0]]){let i=e.osc(t===.5?`sine`:`sawtooth`,55*t);i.detune.value=n;let a=e.gain(t===.5?.6:.12);e.chain(i,a,c),i.start(r),this.droneVoices.push({osc:i,mul:t})}this.layers.drone=s,this.tensionOsc=e.osc(`triangle`,466),this.tensionGain=e.gain(0),e.chain(this.tensionOsc,e.filter(`lowpass`,1200),this.tensionGain,t),this.tensionOsc.start(r)}loop(e,t,n,r,i){let a=this.s.noise(t,!0),o=this.s.gain(0),s=this.s.gain(r);return this.s.chain(a,...n,s,o,this.out),a.start(this.s.now),this.layers[e]=o,i?.(n),s}wander(e,t,n,r){this.wanderers.push({param:e,min:t,max:n,period:r})}rain=0;windMul=1;setProfile(e,t){this.profile=e,this.danger=t}setWeather(e,t){this.rain=e,this.windMul=t}update(e){let t=this.s,n=t.now,r=this.profile,i=1.2,a=.75+.25*Math.sin(n*.37)*Math.sin(n*.13);this.layers.wind.gain.setTargetAtTime(Math.min(1.2,r.wind*a*this.windMul+this.rain*.15),n,i),this.layers.rain.gain.setTargetAtTime(this.rain*.45,n,2),this.layers.rainLow.gain.setTargetAtTime(this.rain*.35,n,2),this.layers.insects.gain.setTargetAtTime(r.insects*.6,n,i),this.layers.water.gain.setTargetAtTime(r.water*.7,n,i),this.layers.trees.gain.setTargetAtTime(r.trees*a*.8,n,i),this.layers.battle.gain.setTargetAtTime(r.battle*(.8+.4*Math.sin(n*.21)),n,i),this.layers.fire.gain.setTargetAtTime(r.fire*.4,n,i),this.layers.drone.gain.setTargetAtTime(r.drone*(.12+this.danger*.12),n,2);for(let e of this.droneVoices)e.osc.frequency.setTargetAtTime(r.dronePitch*e.mul,n,3);this.tensionGain.gain.setTargetAtTime(this.danger*this.danger*.05*(.6+r.drone),n,.8),this.tensionOsc.frequency.setTargetAtTime(r.dronePitch*8.47+this.danger*12,n,1);for(let e of this.wanderers)e.param.setTargetAtTime(e.min+(e.max-e.min)*(.5+.5*Math.sin(n/e.period+e.min)),n,e.period/3);let o=1-this.rain*.85;this.every(`bird`,e,r.birds*o,.9,3.5,()=>this.birdCall(n)),this.every(`crow`,e,r.birds*(r.battle>.2?0:.35),5,14,()=>this.crow(n)),this.every(`cricket`,e,r.insects*o,.6,2.5,()=>this.cricket(n)),this.every(`frog`,e,r.frogs,.4,2.2,()=>this.frog(n)),this.every(`creak`,e,r.trees,6,16,()=>this.creak(n)),this.every(`farGun`,e,r.battle,.25,1.6,()=>{let e=this.distant(Kd(-.9,.9),Kd(.08,.2),1600);Rd(t,e,n+Kd(0,.2),Kd(.4,1))}),this.every(`farCannon`,e,r.battle,2.5,7,()=>{let e=this.distant(Kd(-1,1),Kd(.25,.5),500);zd(t,e,n,Kd(.6,1))}),this.every(`crackle`,e,r.fire,.05,.25,()=>{let e=this.distant(Kd(-.6,.6),.25,4e3),r=t.noise(`white`),i=t.gain(0);t.chain(r,t.filter(`bandpass`,Kd(1500,4e3),3),i,e),t.envelope(i.gain,n,.001,.02,Kd(.1,.4)),r.start(n,Math.random()),r.stop(n+.05)})}every(e,t,n,r,i,a){n<=.02||(this.timers[e]=(this.timers[e]??Kd(r,i))-t*n,!(this.timers[e]>0)&&(this.timers[e]=Kd(r,i),a()))}distant(e,t,n){let r=this.s,i=r.gain(t),a=r.filter(`lowpass`,n),o=r.pan(e);r.chain(i,a,o,this.out);let s=r.gain(.5);return o.connect(s),s.connect(this.reverb),i}birdCall(e){let t=this.s,n=this.distant(Kd(-1,1),Kd(.05,.13),9e3),r=2+Math.floor(Math.random()*4),i=Kd(2200,4200),a=Math.random();for(let o=0;o<r;o++){let r=e+o*Kd(.09,.16),s=t.osc(`sine`,i);a<.5?(s.frequency.setValueAtTime(i*1.3,r),s.frequency.exponentialRampToValueAtTime(i*.75,r+.08)):(s.frequency.setValueAtTime(i*.8,r),s.frequency.exponentialRampToValueAtTime(i*1.25,r+.06));let c=t.gain(0);t.chain(s,c,n),t.envelope(c.gain,r,.01,.08,.5),s.start(r),s.stop(r+.12)}}crow(e){let t=this.s,n=this.distant(Kd(-1,1),Kd(.06,.12),3500);for(let r=0;r<2+Math.floor(Math.random()*2);r++){let i=e+r*Kd(.35,.5),a=t.osc(`sawtooth`,Kd(380,460));a.frequency.exponentialRampToValueAtTime(300,i+.25);let o=t.filter(`bandpass`,1300,3),s=t.gain(0);t.chain(a,o,s,n),t.envelope(s.gain,i,.02,.25,.6),a.start(i),a.stop(i+.32)}}cricket(e){let t=this.s,n=this.distant(Kd(-1,1),Kd(.02,.05),9e3),r=Kd(4200,5200);for(let i=0;i<3;i++){let a=e+i*.05,o=t.osc(`sine`,r),s=t.gain(0);t.chain(o,s,n),t.envelope(s.gain,a,.004,.03,.5),o.start(a),o.stop(a+.05)}}frog(e){let t=this.s;if(Math.random()<.4){let n=this.distant(Kd(-1,1),Kd(.08,.16),900),r=t.osc(`sawtooth`,Kd(95,130)),i=t.osc(`square`,26),a=t.gain(.5),o=t.gain(0);i.connect(a),a.connect(o.gain),t.chain(r,t.filter(`lowpass`,500,2),o,n),t.envelope(o.gain,e,.05,.5,.5),r.start(e),i.start(e),r.stop(e+.6),i.stop(e+.6)}else{let n=this.distant(Kd(-1,1),Kd(.02,.05),8e3),r=t.osc(`sine`,2600);r.frequency.setValueAtTime(2300,e),r.frequency.exponentialRampToValueAtTime(3100,e+.12);let i=t.gain(0);t.chain(r,i,n),t.envelope(i.gain,e,.02,.1,.5),r.start(e),r.stop(e+.15)}}creak(e){let t=this.s,n=this.distant(Kd(-1,1),Kd(.04,.08),1500),r=t.osc(`sawtooth`,Kd(90,160));r.frequency.linearRampToValueAtTime(Kd(70,200),e+.8);let i=t.filter(`bandpass`,700,8),a=t.gain(0);t.chain(r,i,a,n),a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.4,e+.3),a.gain.exponentialRampToValueAtTime(1e-4,e+.9),r.start(e),r.stop(e+1)}},Jd=class{ctx;buffers=new Map;constructor(e){this.ctx=e;for(let e of[`white`,`pink`,`brown`])this.buffers.set(e,this.makeNoise(e,3))}get now(){return this.ctx.currentTime}makeNoise(e,t){let n=Math.floor(this.ctx.sampleRate*t),r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=r.getChannelData(0),a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;for(let t=0;t<n;t++){let n=Math.random()*2-1;e===`white`?i[t]=n:e===`pink`?(a=.99886*a+n*.0555179,o=.99332*o+n*.0750759,s=.969*s+n*.153852,c=.8665*c+n*.3104856,l=.55*l+n*.5329522,u=-.7616*u-n*.016898,i[t]=(a+o+s+c+l+u+d+n*.5362)*.11,d=n*.115926):(f=(f+.02*n)/1.02,i[t]=f*3.5)}return r}noise(e,t=!1){let n=this.ctx.createBufferSource();return n.buffer=this.buffers.get(e),n.loop=t,t&&(n.loopStart=Math.random()*2),n}osc(e,t){let n=this.ctx.createOscillator();return n.type=e,n.frequency.value=t,n}filter(e,t,n=.7){let r=this.ctx.createBiquadFilter();return r.type=e,r.frequency.value=t,r.Q.value=n,r}gain(e=1){let t=this.ctx.createGain();return t.gain.value=e,t}pan(e){let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t}chain(...e){for(let t=0;t<e.length-1;t++)e[t].connect(e[t+1]);return e[e.length-1]}envelope(e,t,n,r,i){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(i,t+n),e.exponentialRampToValueAtTime(1e-4,t+n+r)}impulse(e,t){let n=Math.floor(this.ctx.sampleRate*e),r=this.ctx.createBuffer(2,n,this.ctx.sampleRate);for(let e=0;e<2;e++){let i=r.getChannelData(e);for(let e=0;e<n;e++)i[e]=(Math.random()*2-1)*(1-e/n)**t}return r}},Yd=343,Xd=class{bus;settings;ctx=null;s;master;sfx;ambienceBus;reverb;reverbReturn;ambience;muted=!1;breathTimer=0;inhale=!0;heartTimer=0;stepSide=1;mixed={wind:0,birds:0,insects:0,frogs:0,water:0,trees:0,battle:0,fire:0,drone:0,dronePitch:55};danger=0;active=!1;constructor(e,t){this.bus=e,this.settings=t;let n=()=>this.unlock();window.addEventListener(`pointerdown`,n),window.addEventListener(`keydown`,n),document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())}),t.onChange(()=>this.applyVolumes()),new URLSearchParams(location.search).has(`mute`)&&(this.muted=!0),this.wire()}unlock(){if(this.ctx){this.ctx.state===`suspended`&&!document.hidden&&this.ctx.resume();return}try{this.ctx=new AudioContext}catch{return}this.s=new Jd(this.ctx),this.master=this.s.gain(0);let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),this.sfx=this.s.gain(1),this.ambienceBus=this.s.gain(1),this.sfx.connect(this.master),this.ambienceBus.connect(this.master),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.s.impulse(2.8,2.6),this.reverbReturn=this.s.gain(.5),this.reverb.connect(this.reverbReturn),this.reverbReturn.connect(this.master),this.ambience=new qd(this.s,this.ambienceBus,this.reverb),this.applyVolumes(),this.master.gain.setTargetAtTime(this.targetMaster(),this.ctx.currentTime,1.5)}targetMaster(){return this.muted?0:this.settings.data.masterVolume}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.targetMaster(),e,.1),this.ambienceBus.gain.setTargetAtTime(this.settings.data.ambienceVolume,e,.1)}setMuted(e){this.muted=e,this.applyVolumes()}setPaused(e){this.ctx&&(e?this.ctx.suspend():document.hidden||this.ctx.resume())}spatial(e,t,n=1,r=!1){let i=this.s,a=n/(1+e/18),o=i.gain(a),s=i.filter(`lowpass`,xd(18e3/(1+e/25),500,18e3)),c=i.pan(t),l=o;if(r&&e>15){let t=this.ctx.createDelay(5);t.delayTime.value=Math.min(4.5,e/Yd),i.chain(t,o),l=t}i.chain(o,s,c,this.sfx);let u=i.gain(xd(e/120,.05,.8));return c.connect(u),u.connect(this.reverb),l}get t(){return this.ctx.currentTime}wire(){let e=()=>this.ctx!==null&&this.ctx.state===`running`;this.bus.on(`player:footstep`,t=>{e()&&(this.stepSide=-this.stepSide,kd(this.s,this.spatial(0,this.stepSide*.15,1),this.t,t.surface,t.intensity))}),this.bus.on(`player:land`,t=>{e()&&(kd(this.s,this.spatial(0,0,1.4),this.t,t.surface,.8+t.impact),t.impact>.5&&Ad(this.s,this.spatial(0,0),this.t,!1,.8,.3))}),this.bus.on(`player:jump`,()=>{e()&&Ad(this.s,this.spatial(0,0),this.t,!0,.9,.22)}),this.bus.on(`player:hit`,t=>{if(!e())return;let n=![`crater`,`trench`,`ditch`,`rock`,`artillery`].includes(t.obstacle);t.obstacle!==`artillery`&&Md(this.s,this.spatial(0,0,1),this.t,n,Math.min(1,t.severity)),jd(this.s,this.spatial(0,0),this.t+.03,120+Math.random()*30,Math.min(1,t.severity))}),this.bus.on(`player:fall`,t=>{if(!e())return;let n=this.spatial(0,0,1);t.stage===`trip`?Ad(this.s,n,this.t,!0,1,.35):t.stage===`impact`?(Md(this.s,n,this.t,!1,1),kd(this.s,n,this.t+.05,`dirt`,1.6),jd(this.s,n,this.t+.04,105,1)):jd(this.s,n,this.t,125,.8)}),this.bus.on(`player:sprint`,t=>{e()&&t.active&&Ad(this.s,this.spatial(0,0),this.t,!0,1,.3)}),this.bus.on(`collectible:pickup`,t=>{e()&&Nd(this.s,this.spatial(0,0,1),this.t,t.type)}),this.bus.on(`pursuit:cue`,t=>{if(!e())return;let n=this.spatial(t.distance*1.2+5,t.pan,1.6);switch(t.kind){case`shout`:Pd(this.s,n,this.t);break;case`dog`:Fd(this.s,n,this.t);break;case`horse`:Id(this.s,n,this.t,1.2+Math.random());break;case`gunshot`:Rd(this.s,this.spatial(t.distance+10,t.pan,1.4,!0),this.t,1);break;case`whistle`:Ld(this.s,n,this.t)}}),this.bus.on(`level:up`,()=>{e()&&Gd(this.s,this.spatial(0,0,1),this.t)}),this.bus.on(`weather:thunder`,t=>{e()&&Wd(this.s,this.spatial(20+(1-t.strength)*300,Math.random()*1.6-.8,1.6),this.t+t.delay,t.strength)}),this.bus.on(`pursuit:danger`,e=>this.danger=e.level),this.bus.on(`pursuit:shot`,t=>{e()&&(Rd(this.s,this.spatial(t.distance,t.pan,1.4,!0),this.t,1),t.hit?(Md(this.s,this.spatial(0,0,.8),this.t+.04,!1,.9),jd(this.s,this.spatial(0,0),this.t+.07,115,1)):Hd(this.s,this.spatial(2,Math.random()*1.4-.7,1),this.t+.03))}),this.bus.on(`battle:volley`,t=>{if(e()){if(t.distance<8){Hd(this.s,this.spatial(2,t.pan,1),this.t);return}for(let e=0;e<Math.min(t.count,8);e++)Rd(this.s,this.spatial(t.distance,t.pan,1.2,!0),this.t+Math.random()*.6,.6+Math.random()*.4)}}),this.bus.on(`battle:cannon`,t=>{e()&&zd(this.s,this.spatial(t.distance,t.pan,1.8,!0),this.t,1)}),this.bus.on(`battle:artillery`,t=>{e()&&t.incoming&&Bd(this.s,this.spatial(Math.max(5,t.distance*.5),0,1.2),this.t,yd.artilleryWarning)}),this.bus.on(`battle:explosion`,t=>{e()&&Vd(this.s,this.spatial(Math.max(4,t.distance),0,1.3,!0),this.t,t.strength)})}update(e,t,n,r,i=null){if(!this.ctx||this.ctx.state!==`running`)return;let a=t.a.ambience,o=t.b.ambience,s=this.mixed;for(let e of Object.keys(s))s[e]=Sd(a[e],o[e],t.t);if(this.ambience.setProfile(this.mixed,r?this.danger:0),this.ambience.setWeather(i?.rain??0,i?.wind??1),this.ambience.update(e),this.reverbReturn.gain.setTargetAtTime(.35+this.mixed.frogs*.3+this.mixed.battle*.25,this.t,1),!r||!this.active)return;let c=n.sprinting?1:n.exhausted?.95:xd(.25+(1-n.staminaFraction)*.5,0,.8);if(this.breathTimer-=e,this.breathTimer<=0){let e=Sd(1.15,.42,c);this.breathTimer=e,Ad(this.s,this.spatial(0,0,1),this.t,this.inhale,c,e*.85),this.inhale=!this.inhale}this.danger>.3&&(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=Sd(.95,.5,this.danger),Ud(this.s,this.spatial(0,0,1),this.t,this.danger)))}},Zd=[`The North Star does not move. Keep it before you.`,`Cross running water when you can. The hounds lose the scent.`,`Travel by night. Rest where the reeds grow tall.`,`A lantern in a window means a safe house. Knock twice, then once.`,`Follow the river north until it bends to the east.`,`Moss grows heaviest on the north side of the trees.`,`The Union camp lies past the burned church.`,`Tell the soldiers you are contraband of war. They will let you through the lines.`,`Others made it. Their names are written down in the North.`,`Freedom is a road, not a door. Keep walking.`],Qd={cotton:[`Run down at the edge of the fields.`,`They caught up before the tree line.`],swamp:[`The hounds found the trail in the swamp.`,`The water could not hide you this time.`],battlefield:[`Taken within sight of the Union lines.`,`So close. The smoke was not enough.`]},$d={cotton:[`Shot down in the furrows, the tree line in sight.`,`The riders fired before you reached the trees.`],swamp:[`A rider fired into the reeds. The swamp went quiet.`,`Shot at the water’s edge.`],battlefield:[`Cut down in the crossfire, short of the lines.`,`Shot running for the Union lines.`]},ef={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},tf=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},nf=new Cs(-1,1,1,-1,0,1),rf=new class extends Dr{constructor(){super(),this.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new q([0,2,0,0,2,0],2))}},af=class{constructor(e){this._mesh=new J(rf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},of=class extends tf{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Io.clone(e.uniforms),this.material=new zo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new af(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},sf=class extends tf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},cf=class extends tf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},lf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new of(ef),this.copyPass.material.blending=0,this.timer=new js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}sf!==void 0&&(r instanceof sf?n=!0:r instanceof cf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},uf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},df=class extends tf{constructor(){super(),this.isOutputPass=!0,this.uniforms=Io.clone(uf.uniforms),this.material=new Bo({name:uf.name,uniforms:this.uniforms,vertexShader:uf.vertexShader,fragmentShader:uf.fragmentShader}),this._fsQuad=new af(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ff=class extends tf{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},pf={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},mf=class e extends tf{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Jt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Jt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=pf;this.highPassUniforms=Io.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Io.clone(ef.uniforms),this.blendMaterial=new zo({uniforms:this.copyUniforms,vertexShader:ef.vertexShader,fragmentShader:ef.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new ii,this._fsQuad=new af(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new zo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new zo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};mf.BlurDirectionX=new H(1,0),mf.BlurDirectionY=new H(0,1);var hf={uniforms:{tDiffuse:{value:null},time:{value:0},aspect:{value:1},gain:{value:new U(1,1,1)},lift:{value:new U(0,0,0)},saturation:{value:1},contrast:{value:1},vignette:{value:.35},grain:{value:.035},danger:{value:0},desat:{value:0},flash:{value:0},fade:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time, aspect, saturation, contrast, vignette, grain, danger, desat, flash, fade;
    uniform vec3 gain, lift;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      c = c * gain + lift * (1.0 - c);
      c = (c - 0.5) * contrast + 0.5;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, saturation * (1.0 - desat * 0.65));

      vec2 q = (vUv - 0.5) * vec2(aspect, 1.0);
      float r = length(q);
      float vig = smoothstep(0.35, 1.05, r);
      c *= 1.0 - vig * vignette;

      // Pursuers close: the edges darken and redden, pulsing like a heartbeat.
      float beat = 0.75 + 0.25 * sin(time * 7.5) * sin(time * 3.75);
      c = mix(c, c * vec3(0.55, 0.16, 0.1), smoothstep(0.25, 0.95, r) * danger * beat);

      // Impact.
      c = mix(c, vec3(0.45, 0.1, 0.05), flash * smoothstep(0.1, 0.9, r) * 0.8);
      c += flash * 0.06;

      c += (hash(vUv * 1024.0 + fract(time) * 37.0) - 0.5) * grain;
      c *= 1.0 - fade;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }
  `},gf=class{composer;bloom;grade;bloomEnabled=!0;danger=0;desaturate=0;flash=0;fade=0;constructor(e,t,n){this.composer=new lf(e),this.composer.addPass(new ff(t,n)),this.bloom=new mf(new H(256,256),.4,.55,.9),this.composer.addPass(this.bloom),this.composer.addPass(new df),this.grade=new of(hf),this.composer.addPass(this.grade)}setBloom(e){this.bloomEnabled=e,this.bloom.enabled=e}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloom.resolution.set(e/2,t/2),this.grade.uniforms.aspect.value=e/t}update(e,t){let n=this.grade.uniforms;n.time.value+=e,n.gain.value.set(...t.grade.gain),n.lift.value.set(...t.grade.lift),n.saturation.value=t.grade.saturation,n.contrast.value=t.grade.contrast,n.vignette.value=t.grade.vignette,n.danger.value=this.danger,n.desat.value=this.desaturate,n.flash.value=this.flash,n.fade.value=this.fade,this.bloom.strength=this.bloomEnabled?t.bloom*.75:0,this.flash=Math.max(0,this.flash-e*2.2)}render(){this.composer.render()}},_f={at(e){let t=gd,n=Math.max(0,e);return 1-Math.exp(-n/t.rampDistance)+Math.min(1,Math.max(0,n-t.lateRampStart)/t.lateRampDistance)*t.lateMax},runSpeed(e){return Math.min(ud.absoluteMaxRunSpeed,Sd(ud.baseRunSpeed,ud.maxRunSpeed,this.at(e)))},rowSpacing(e){return Math.max(gd.rowSpacingMin,Sd(gd.rowSpacingEasy,gd.rowSpacingHard,this.at(e)))},obstaclesPerRow(e){return Sd(gd.obstaclesPerRowEasy,gd.obstaclesPerRowHard,this.at(e))},safePathWidth(e){return Math.max(gd.safePathWidthMin,Sd(gd.safePathWidthEasy,gd.safePathWidthHard,this.at(e)))},pursuitFactor(e){return Math.min(hd.speedFactorCap,Sd(hd.speedFactorStart,hd.speedFactorMax,this.at(e)))},artilleryInterval(e){return Math.max(yd.artilleryIntervalMin,Sd(yd.artilleryIntervalEasy,yd.artilleryIntervalHard,this.at(e)))}},vf=class{bus;particles;shells=[];markers=[];timer=6;whizTimer=3;barrageTimer=2;group=new Tn;markerGeo=new Qi(1,24).rotateX(-Math.PI/2);constructor(e,t,n){this.bus=t,this.particles=n,e.add(this.group)}reset(){for(let e of this.shells)this.freeMarker(e.marker);this.shells=[],this.timer=6}takeMarker(){let e=this.markers.pop()??new J(this.markerGeo,new ii({color:1708556,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));return e.renderOrder=2,this.group.add(e),e}freeMarker(e){this.group.remove(e),this.markers.push(e)}update(e,t,n,r,i){let a=!1;if(n>.05){let a=_f.artilleryInterval(t.d)/n;if(this.timer-=e,this.timer<=0&&(this.timer=a*r.range(.6,1.4),this.fire(t,r,i)),this.barrageTimer-=e,this.barrageTimer<=0){this.barrageTimer=r.range(.4,1.2)/n;let e=r.chance(.75),a=e?r.sign()*r.range(13,70):r.range(-9,9),o=e?t.d+r.range(-10,120):t.d+r.range(55,140),s=i(a,o),c=r.range(.6,1.2);this.particles.explosion(a,s,-o,c),this.bus.emit(`battle:explosion`,{x:a,z:-o,distance:Math.hypot(a-t.x,o-t.d),strength:c})}if(this.whizTimer-=e*n,this.whizTimer<=0){this.whizTimer=r.range(1.2,4);let e=t.x+r.sign()*r.range(1.5,6),n=t.d+r.range(4,16);this.particles.dustKick(e,i(e,n),-n,1.2,6969928),this.bus.emit(`battle:volley`,{distance:4,pan:Math.sign(e-t.x)*.6,count:1})}}for(let n=this.shells.length-1;n>=0;n--){let r=this.shells[n];r.timer-=e;let i=1-Math.max(0,r.timer)/yd.artilleryWarning,o=r.marker.material;o.opacity=.55*i*i,r.marker.scale.setScalar(yd.artilleryBlastRadius*(.5+.5*i)),r.timer<=0&&(a=this.explode(r,t)||a,this.freeMarker(r.marker),this.shells.splice(n,1))}return a}fire(e,t,n){let r=e.speed*yd.artilleryWarning,i=e.d+r+t.range(-2,14),a=ud.corridorHalfWidth,o=Math.max(-a,Math.min(a,e.x+t.range(-7,7))),s=n(o,i),c=this.takeMarker();c.position.set(o,s+.05,-i),this.shells.push({x:o,d:i,y:s,timer:yd.artilleryWarning,marker:c}),this.bus.emit(`battle:artillery`,{x:o,z:-i,distance:Math.hypot(o-e.x,i-e.d),incoming:!0})}explode(e,t){this.particles.explosion(e.x,e.y,-e.d,1);let n=Math.hypot(e.x-t.x,e.d-t.d);return this.bus.emit(`battle:explosion`,{x:e.x,z:-e.d,distance:n,strength:1}),n<yd.artilleryBlastRadius&&t.invulnerableTimer<=0&&t.y-e.y<1.5&&(t.knockedDown=1.1,t.invulnerableTimer=2,t.stumbleTimer=ud.stumbleDuration,t.speed*=.2,t.vx=Math.sign(t.x-e.x||1)*5,this.bus.emit(`player:hit`,{obstacle:`artillery`,severity:1.3,damage:yd.artilleryGapPenalty,x:e.x,z:-e.d}),!0)}};function yf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=bf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=bf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function bf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new pr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var xf=new U;function Sf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;xf.copy(t),xf[r]=0,xf.normalize();let l=.5*o/(o+s),u=1-xf.angleTo(e)/c;return Math.sign(xf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Cf=class e extends Xi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new U,c=new U,l=new U(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new U,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Sf(m,c,`z`,`y`,i,n),f[a+1]=1-Sf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Sf(m,c,`z`,`y`,i,n),f[a+1]=1-Sf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Sf(m,c,`x`,`z`,i,e),f[a+1]=Sf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Sf(m,c,`x`,`z`,i,e),f[a+1]=1-Sf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Sf(m,c,`x`,`y`,i,e),f[a+1]=1-Sf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Sf(m,c,`x`,`y`,i,e),f[a+1]=1-Sf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function wf(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25}function Tf(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=i*i+a*a+o*o;return(t,c,l)=>{let u=t-e[0],d=c-e[1],f=l-e[2],p=Math.max(0,Math.min(1,(u*i+d*a+f*o)/s)),m=u-i*p,h=d-a*p,g=f-o*p;return Math.sqrt(m*m+h*h+g*g)-(n+(r-n)*p)}}function Ef(e,t){return(n,r,i)=>{let a=(n-e[0])/t[0],o=(r-e[1])/t[1],s=(i-e[2])/t[2],c=Math.sqrt(a*a+o*o+s*s),l=Math.sqrt((a/t[0])**2+(o/t[1])**2+(s/t[2])**2);return l>0?c*(c-1)/l:-Math.min(t[0],t[1],t[2])}}function Df(e,...t){return(n,r,i)=>{let a=t[0](n,r,i);for(let o=1;o<t.length;o++)a=wf(a,t[o](n,r,i),e);return a}}function Of(e,t,n,r,i=()=>1){let a=Math.ceil((n[0]-t[0])/r)+1,o=Math.ceil((n[1]-t[1])/r)+1,s=Math.ceil((n[2]-t[2])/r)+1,c=new Float32Array(a*o*s),l=(e,t,n)=>e+a*(t+o*n);for(let n=0;n<s;n++)for(let i=0;i<o;i++)for(let o=0;o<a;o++)c[l(o,i,n)]=e(t[0]+o*r,t[1]+i*r,t[2]+n*r);let u=new Int32Array((a-1)*(o-1)*(s-1)).fill(-1),d=(e,t,n)=>e+(a-1)*(t+(o-1)*n),f=[],p=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],m=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],h=new Float32Array(8);for(let e=0;e<s-1;e++)for(let n=0;n<o-1;n++)for(let i=0;i<a-1;i++){let a=0;for(let t=0;t<8;t++)h[t]=c[l(i+p[t][0],n+p[t][1],e+p[t][2])],h[t]<0&&(a|=1<<t);if(a===0||a===255)continue;let o=0,s=0,g=0,_=0;for(let[e,t]of m){if(h[e]<0==h[t]<0)continue;let n=h[e]/(h[e]-h[t]);o+=p[e][0]+(p[t][0]-p[e][0])*n,s+=p[e][1]+(p[t][1]-p[e][1])*n,g+=p[e][2]+(p[t][2]-p[e][2])*n,_++}u[d(i,n,e)]=f.length/3,f.push(t[0]+(i+o/_)*r,t[1]+(n+s/_)*r,t[2]+(e+g/_)*r)}let g=[],_=(e,t,n,r,i)=>{e<0||t<0||n<0||r<0||(i?g.push(e,n,t,e,r,n):g.push(e,t,n,e,n,r))};for(let e=1;e<s-1;e++)for(let t=1;t<o-1;t++)for(let n=1;n<a-1;n++){let r=c[l(n,t,e)]<0;r!==c[l(n+1,t,e)]<0&&_(u[d(n,t-1,e-1)],u[d(n,t,e-1)],u[d(n,t,e)],u[d(n,t-1,e)],!r),r!==c[l(n,t+1,e)]<0&&_(u[d(n-1,t,e-1)],u[d(n-1,t,e)],u[d(n,t,e)],u[d(n,t,e-1)],!r),r!==c[l(n,t,e+1)]<0&&_(u[d(n-1,t-1,e)],u[d(n,t-1,e)],u[d(n,t,e)],u[d(n-1,t,e)],!r)}let v=f.length/3,y=new Float32Array(v*3),b=new Float32Array(v*3),x=r*.5;for(let t=0;t<v;t++){let n=f[t*3],r=f[t*3+1],a=f[t*3+2],o=e(n+x,r,a)-e(n-x,r,a),s=e(n,r+x,a)-e(n,r-x,a),c=e(n,r,a+x)-e(n,r,a-x),l=Math.hypot(o,s,c)||1;y[t*3]=o/l,y[t*3+1]=s/l,y[t*3+2]=c/l;let u=i(n,r,a);b[t*3]=b[t*3+1]=b[t*3+2]=u}let S=new Dr;return S.setAttribute(`position`,new q(f,3)),S.setAttribute(`normal`,new pr(y,3)),S.setAttribute(`color`,new pr(b,3)),S.setAttribute(`uv`,new pr(new Float32Array(v*2),2)),S.setIndex(g),S.computeBoundingSphere(),S}var kf={hipHeight:.9,hipWidth:.095,spineOffset:.08,shoulderHeight:.44,shoulderWidth:.19,neckHeight:.5,upperArm:.29,forearm:.25,thigh:.43,shin:.42};function Af(e,t=1){let n=e.index?e.toNonIndexed():e;n.computeVertexNormals();let r=n.getAttribute(`position`).count,i=new Float32Array(r*3).fill(t);n.setAttribute(`color`,new pr(i,3)),n.getAttribute(`uv`)||n.setAttribute(`uv`,new pr(new Float32Array(r*2),2));for(let e of Object.keys(n.attributes))[`position`,`normal`,`uv`,`color`].includes(e)||n.deleteAttribute(e);return n}function jf(e){let t=yf(e,!1);return t.computeBoundingSphere(),t}function Mf(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`color`);for(let e=0;e<n.count;e++){let i=t(n.getX(e),n.getY(e),n.getZ(e));r.setXYZ(e,r.getX(e)*i,r.getY(e)*i,r.getZ(e)*i)}return e}var Nf=1;function Pf(e,t){let n=Nf;Nf=e;try{return t()}finally{Nf=n}}var Ff=(e,t,n,r,i)=>Of(e,t,n,r*Nf,i),If={pelvis(){return Ff(Df(.05,Ef([0,0,0],[.155,.12,.105]),Ef([.06,-.04,.045],[.075,.085,.07]),Ef([-.06,-.04,.045],[.075,.085,.07]),Ef([0,.09,0],[.145,.06,.1])),[-.22,-.2,-.16],[.22,.18,.16],.012)},torso(){return Ff(Df(.06,Ef([0,.08,0],[.145,.13,.1]),Ef([0,.29,-.012],[.172,.19,.118]),Ef([0,.31,.02],[.16,.19,.1]),Tf([-.168,.42,.01],[.168,.42,.01],.062,.062),Tf([-.08,.465,.02],[.08,.465,.02],.048,.048),Tf([0,.44,0],[0,.53,0],.056,.05),Ef([0,-.01,0],[.155,.06,.108])),[-.27,-.1,-.18],[.27,.58,.18],.012,(e,t)=>t>-.01&&t<.035?.28:1)},head(){return Ff(Df(.025,Tf([0,0,.005],[0,.1,.005],.052,.05),Ef([0,.172,.012],[.084,.104,.098]),Ef([0,.105,-.028],[.066,.058,.07]),Ef([0,.08,-.05],[.032,.024,.03]),Tf([-.042,.168,-.083],[.042,.168,-.083],.017,.017),Tf([0,.152,-.094],[0,.118,-.108],.011,.016),Ef([.086,.152,.004],[.012,.027,.019]),Ef([-.086,.152,.004],[.012,.027,.019]),Ef([.046,.128,-.07],[.022,.018,.02]),Ef([-.046,.128,-.07],[.022,.018,.02])),[-.12,-.03,-.14],[.12,.3,.14],.008,(e,t,n)=>t>.198-(n>0?.07:0)&&!(n<-.07&&t<.24)?.22:n<-.075&&Math.abs(Math.abs(e)-.032)<.014&&Math.abs(t-.152)<.008?.25:n<-.085&&Math.abs(e)<.022&&Math.abs(t-.092)<.005?.45:1)},kepi(){return jf([Af(new $i(.083,.098,.11,14).rotateX(-.25).translate(0,.29,0)),Af(new $i(.083,.083,.012,14).rotateX(-.25).translate(0,.345,-.012)),Af(new $i(.08,.08,.008,12,1,!1,Math.PI*.6,Math.PI*.8).translate(0,.245,-.03),.2)])},slouchHat(){let e=Af(new $i(.2,.21,.012,20).translate(0,.255,0)),t=e.getAttribute(`position`);for(let e=0;e<t.count;e++){let n=Math.hypot(t.getX(e),t.getZ(e));t.setY(e,t.getY(e)-Math.max(0,n-.12)*.25*(1+.5*Math.sin(Math.atan2(t.getZ(e),t.getX(e))*2)))}return e.computeVertexNormals(),jf([e,Af(new $i(.075,.098,.12,14).translate(0,.32,0)),Af(new $i(.099,.1,.022,14).translate(0,.272,0),.35)])},upperArm(){return Ff(Df(.03,Tf([0,.02,0],[0,-kf.upperArm,0],.05,.04),Ef([0,-.12,-.016],[.046,.095,.046])),[-.08,-.36,-.08],[.08,.08,.08],.01)},forearm(){return Ff(Df(.03,Tf([0,.01,0],[0,-kf.forearm,0],.042,.029),Ef([0,-.07,.004],[.043,.085,.037])),[-.07,-.3,-.07],[.07,.06,.07],.009)},hand(){return Ff(Df(.015,Ef([0,-.045,0],[.019,.045,.04]),Tf([0,-.085,-.008],[-.018,-.12,0],.019,.016),Tf([-.006,-.03,-.036],[-.02,-.066,-.05],.012,.01)),[-.05,-.15,-.08],[.04,.02,.06],.007)},thigh(){return Ff(Df(.04,Tf([0,.03,0],[0,-kf.thigh,0],.08,.054),Ef([0,-.15,-.018],[.075,.16,.072])),[-.12,-.5,-.12],[.12,.13,.12],.012)},shin(){return Ff(Df(.03,Tf([0,.01,0],[0,-kf.shin,0],.052,.038),Ef([0,-.12,.024],[.05,.1,.05]),Ef([0,0,-.03],[.04,.04,.03])),[-.09,-.48,-.09],[.09,.08,.1],.01)},foot(){let e=Df(.03,Ef([0,-.02,0],[.05,.06,.055]),Tf([0,-.045,.03],[0,-.055,-.15],.048,.042));return Ff((t,n,r)=>Math.max(e(t,n,r),-(n+.095)),[-.08,-.12,-.22],[.08,.06,.1],.009,(e,t)=>t<-.085?.3:1)},rifle(){let e=Af(new Cf(.04,.07,.42,2,.015).translate(0,-.01,.17),1);Mf(e,()=>1);let t=jf([e,Af(new Xi(.035,.035,.75).translate(0,.005,-.4),1),Af(new $i(.009,.011,1,6).rotateX(Math.PI/2).translate(0,.03,-.55),.45),Af(new Xi(.045,.03,.06).translate(0,.02,-.02),.4)]),n=t.getAttribute(`color`);for(let e=0;e<n.count;e++)n.getX(e)>.9?n.setXYZ(e,.42,.27,.15):n.setXYZ(e,.2,.2,.21);return t},pack(){return jf([Af(new Cf(.28,.3,.1,2,.03).translate(0,.3,.13)),Af(new Zi(.05,.3,4,8).rotateZ(Math.PI/2).translate(0,.48,.12),.75)])},noose(){return jf([Af(new Ao(.06,.012,6,14).rotateX(Math.PI/2).translate(0,.06,0))])}};function Lf(){return{x:0,y:kf.hipHeight,z:0,yaw:0,pitch:0,roll:0,spinePitch:0,spineYaw:0,spineRoll:0,headPitch:0,headYaw:0,headRoll:0,lArm:[0,.08,.15],rArm:[0,.08,.15],lLeg:[0,.02,.05],rLeg:[0,.02,.05],ankle:0,rifle:`none`}}var Rf=[`x`,`y`,`z`,`yaw`,`pitch`,`roll`,`spinePitch`,`spineYaw`,`spineRoll`,`headPitch`,`headYaw`,`headRoll`,`ankle`],zf=[`lArm`,`rArm`,`lLeg`,`rLeg`];function Bf(e,t,n,r){for(let i of Rf)r[i]=e[i]+(t[i]-e[i])*n;for(let i of zf)for(let a=0;a<3;a++)r[i][a]=e[i][a]+(t[i][a]-e[i][a])*n;return r.rifle=n<.5?e.rifle:t.rifle,r}function Vf(e,t){return Bf(e,e,0,t)}var Hf={stand(e,t){let n=Math.sin(t*1.6)*.015;return e.pitch=0,e.roll=0,e.spinePitch=.03+n,e.spineYaw=0,e.spineRoll=0,e.headPitch=0,e.headYaw=Math.sin(t*.3)*.2,e.headRoll=0,e.lArm=[.05,.1,.2],e.rArm=[.05,.1,.2],e.lLeg=[.02,.05,.04],e.rLeg=[-.02,.05,.04],e.ankle=0,e},run(e,t,n,r=!1){let i=Math.sin(t),a=Math.cos(t),o=n;return e.pitch=.1*o,e.roll=i*.03*o,e.spinePitch=.08*o,e.spineYaw=-i*.18*o,e.spineRoll=0,e.headPitch=-.12*o,e.headYaw=i*.12*o,e.headRoll=0,e.lLeg=[i*.75*o,.03,(.25+Math.max(0,-a)*1.35+Math.max(0,i)*.5)*o],e.rLeg=[-i*.75*o,.03,(.25+Math.max(0,a)*1.35+Math.max(0,-i)*.5)*o],e.ankle=.2*o,r?(e.rArm=[.55,.15,1.35],e.lArm=[.75,.1,1.1],e.rifle=`port`):(e.lArm=[-i*.8*o,.12,(.6+Math.max(0,-i)*.9)*o+.3],e.rArm=[i*.8*o,.12,(.6+Math.max(0,i)*.9)*o+.3]),Math.abs(a)*.06*o},aim(e,t=0){return e.pitch=.05-t*.1,e.roll=0,e.spinePitch=.12-t*.15,e.spineYaw=.35,e.spineRoll=0,e.headPitch=.05,e.headYaw=-.32,e.headRoll=.15,e.rArm=[1.25,.55,1.75],e.lArm=[1.45,-.05,.35],e.lLeg=[.35,.12,.25],e.rLeg=[-.25,.14,.12],e.ankle=0,e.rifle=`aim`,e},ride(e,t,n){return e.pitch=.12+Math.sin(t*9)*.03,e.roll=0,e.spinePitch=.08,e.spineYaw=0,e.spineRoll=0,e.headPitch=-.08,e.headYaw=0,e.headRoll=0,e.lLeg=[1.2,.5,1.5],e.rLeg=[1.2,.5,1.5],e.ankle=.1,e.lArm=[.75,.05,1.2],e.rArm=n?[.7,.2,1.4]:[.75,.05,1.2],e.rifle=n?`hand`:`none`,e},rideAim(e,t,n=0){return Hf.ride(e,t,!0),e.spinePitch=.02-n*.12,e.spineYaw=.3,e.headYaw=-.3,e.headPitch=.05,e.rArm=[1.25,.55,1.75],e.lArm=[1.45,-.05,.35],e.rifle=`aim`,e},lying(e,t){let n=Math.abs(Math.floor(t))%4,r=n%2==0;return e.pitch=r?-Math.PI/2:Math.PI/2,e.roll=(n===2?.3:n===3?-.25:.05)*(r?1:-1),e.spinePitch=r?-.05:.05,e.spineYaw=n===1?.25:-.1,e.spineRoll=.1,e.headPitch=r?-.3:.25,e.headYaw=n===2?.9:-.6,e.headRoll=0,e.lArm=n===0?[2.6,.35,.4]:n===1?[.4,1.2,.6]:[1.2,.5,1.6],e.rArm=n===0?[.3,.6,.3]:n===1?[2.2,.4,.2]:[.1,.25,.4],e.lLeg=n===3?[.9,.2,1.4]:[.1,.18,.2],e.rLeg=n===2?[.6,.1,1.2]:[-.05,.12,.35],e.ankle=.5,e.rifle=`none`,e},hang(e,t,n){return e.pitch=Math.sin(t*.7+n)*.02,e.roll=Math.sin(t*.5+n*2)*.025,e.spinePitch=.06,e.spineYaw=0,e.spineRoll=.04,e.headPitch=.55,e.headYaw=.1,e.headRoll=.45,e.lArm=[.04,.06,.12],e.rArm=[.02,.05,.1],e.lLeg=[.04,.02,.12],e.rLeg=[0,.03,.18],e.ankle=.9,e.rifle=`none`,e}},Uf=.13,Wf={light:[14794660,14069392,13213055,15255470],dark:[4007193,4860957,5912100,3350554]},Gf=(e,t)=>e[Math.floor(t*e.length)%e.length],Kf={union(e){return{skin:e<.22?Gf(Wf.dark,e*7):Gf(Wf.light,e*5),coat:2305094,sleeves:2305094,trousers:e>.85?2765648:7306906,feet:1775380,hat:`kepi`,hatColor:2239040,rifle:!0,pack:e>.3,build:.95+e*.1}},confederate(e){let t=e>.5,n=t?9073488:7236192;return{skin:Gf(Wf.light,e*9),coat:n,sleeves:n,trousers:e>.7?6050372:t?7232576:6183506,feet:e>.9?6965808:1906965,hat:e>.45?`slouch`:`kepi`,hatColor:e>.45?3813672:6183506,rifle:!0,pack:e>.6,build:.95+e*.1}},catcher(e){return{skin:Gf(Wf.light,e*3),coat:e>.5?2827293:3813412,sleeves:e>.5?2827293:3813412,trousers:4865068,feet:1709586,hat:`slouch`,hatColor:1906965,rifle:!0,pack:!1,build:1+e*.08}},runner(e){return{skin:Gf(Wf.dark,e*4),coat:11839371,sleeves:11839371,trousers:e>.5?5916210:7036488,feet:Gf(Wf.dark,e*4),hat:e>.7?`slouch`:`none`,hatColor:9075280,rifle:!1,pack:!1,build:.95+e*.08}}},qf=class{bus;characters;particles;gap=hd.startGap;danger=0;caught=!1;caughtTime=0;shotDown=!1;chasers=[];hounds=[];flankers=[];cueTimer=4;glimpseTimer=hd.glimpseCooldown*.5;flank={side:1,x:0,d:0,time:0,active:!1};dangerEmitTimer=0;time=0;muzzle=new U;constructor(e,t,n){this.bus=e,this.characters=t,this.particles=n,e.on(`player:hit`,e=>this.penalize(e.damage))}reset(){this.gap=hd.startGap,this.danger=0,this.caught=!1,this.shotDown=!1,this.caughtTime=0,this.cueTimer=4,this.glimpseTimer=hd.glimpseCooldown*.5,this.flank.active=!1,this.despawn();let e=this.characters,t=[4861726,2760987,7031342,8221544];[{offset:-2.3,lag:0},{offset:2.5,lag:2.2}].forEach((n,r)=>{let i=e.horses.spawn(t[r%t.length]),a=e.humans.spawn(Kf.catcher(r*.37+.1));i&&a&&this.chasers.push({horse:i,man:a,x:0,offset:n.offset,lag:n.lag,fireTimer:1+r,recoil:0})});for(let[t,n]of[[-.8,-4],[1.1,-5.2]]){let r=e.hounds.spawn(6965808);r&&this.hounds.push({dog:r,x:0,offset:t,lag:n})}for(let n=0;n<2;n++){let r=e.horses.spawn(t[(n+2)%t.length]),i=e.humans.spawn(Kf.catcher(.6+n*.2));r&&i&&this.flankers.push({horse:r,man:i})}this.hideAll()}despawn(){let e=this.characters;for(let t of this.chasers)e.horses.remove(t.horse),e.humans.remove(t.man);for(let t of this.hounds)e.hounds.remove(t.dog);for(let t of this.flankers)e.horses.remove(t.horse),e.humans.remove(t.man);this.chasers=[],this.hounds=[],this.flankers=[]}hideAll(){for(let e of this.chasers)this.park(e.horse,e.man);for(let e of this.flankers)this.park(e.horse,e.man);for(let e of this.hounds)e.dog.y=-50}park(e,t){e.y=-50,t.pose.y=-50}penalize(e){this.caught||(this.gap-=e)}pursuerSpeed(e){return _f.runSpeed(e)*_f.pursuitFactor(e)}update(e,t,n,r){this.time+=e,!this.caught&&!this.shotDown?(this.gap+=(t.speed-this.pursuerSpeed(t.d))*e,this.gap=Math.min(this.gap,hd.maxGap),this.gap<=0&&(this.gap=0,this.caught=!0,this.caughtTime=0,this.bus.emit(`pursuit:cue`,{kind:`shout`,distance:3,pan:0}))):this.caughtTime+=e,this.danger=xd(1-this.gap/hd.dangerGap,0,1),this.dangerEmitTimer-=e,this.dangerEmitTimer<=0&&(this.dangerEmitTimer=.25,this.bus.emit(`pursuit:danger`,{level:this.danger})),t.sinceHit+=e,t.sinceHit>fd.regenDelay&&(t.health=Math.min(fd.max,t.health+fd.regenPerSecond*e)),this.updateCues(e,n),this.updateChasers(e,t,r),this.updateGunfire(e,t,n),this.updateFlank(e,t,n,r)}updateCues(e,t){if(this.caught||this.shotDown||(this.cueTimer-=e,this.cueTimer>0))return;let n=xd(1-this.gap/hd.maxGap,0,1);this.cueTimer=Sd(hd.cueIntervalFar,hd.cueIntervalNear,n)*t.range(.7,1.3);let r={shout:3,dog:3+n*2,horse:2+n*3,whistle:.6,gunshot:this.gap>hd.fireRange&&n>.6?.8:.15},i=t.weighted(r)??`shout`;this.bus.emit(`pursuit:cue`,{kind:i,distance:this.gap,pan:t.range(-.6,.6)})}updateChasers(e,t,n){let r=this.gap<150,i=this.caught||this.shotDown?Math.max(0,6-this.caughtTime*4):this.pursuerSpeed(t.d),a=ud.corridorHalfWidth;for(let o of this.chasers){if(!r){this.park(o.horse,o.man);continue}o.x=Td(o.x,xd(t.x+o.offset,-a,a),.9,e);let s=this.caught||this.shotDown,c=s?Math.max(3+o.lag,Math.min(this.gap+o.lag,9)-this.caughtTime*2.5):this.gap+o.lag,l=t.d-c,u=o.horse;u.x=o.x,u.z=-l,u.y=n(o.x,l),u.yaw=0,u.speed=i;let d=this.gap<hd.fireRange*1.3&&!s;o.recoil=Math.max(0,o.recoil-e*4),d?Hf.rideAim(o.man.pose,this.time,o.recoil):Hf.ride(o.man.pose,this.time,!0),o.man.pose.x=u.x,o.man.pose.z=u.z+.05,o.man.pose.y=u.y+u.dims.saddleY+u.bob,o.man.pose.yaw=0}for(let o of this.hounds){if(!r){o.dog.y=-50;continue}o.x=Td(o.x,xd(t.x+o.offset,-a,a),1.6,e);let s=this.caught||this.shotDown?Math.max(1.5,Math.min(this.gap+o.lag,6)-this.caughtTime*3):this.gap+o.lag,c=t.d-Math.max(1.2,s);o.dog.x=o.x,o.dog.z=-c,o.dog.y=n(o.x,c),o.dog.speed=i*1.05}}updateGunfire(e,t,n){if(this.caught||this.shotDown||this.gap>hd.fireRange)return;let r=hd;for(let i of this.chasers){if(i.fireTimer-=e,i.fireTimer>0)continue;i.fireTimer=n.range(r.fireInterval[0],r.fireInterval[1]),i.recoil=1;let a=this.characters.humans.muzzle(i.man,this.muzzle);this.particles.muzzle(a.x,a.y,a.z,0,-1,!1);let o=1-this.gap/r.fireRange,s=Sd(r.hitChanceFar,r.hitChanceNear,o);s-=Math.abs(t.vx)/ud.strafeSpeed*r.dodgeBonus,t.downed&&(s+=.15),t.grounded||(s-=.08);let c=n.next()<xd(s,.06,.8);if(this.bus.emit(`pursuit:shot`,{hit:c,distance:this.gap,pan:xd((i.x-t.x)/6,-1,1)}),c){t.health-=fd.shotDamage,t.sinceHit=0,t.stumbleTimer=Math.max(t.stumbleTimer,.6),t.speed*=.8,this.bus.emit(`player:wounded`,{health:t.health}),t.health<=0&&(this.shotDown=!0,this.caughtTime=0);return}let l=n.sign();this.particles.dustKick(t.x+l*n.range(.6,2.5),t.y,t.z-n.range(1,6),1.2,6969928)}}updateFlank(e,t,n,r){let i=this.flank;if(i.active||(this.glimpseTimer-=e,this.glimpseTimer<=0&&!this.caught&&(this.glimpseTimer=hd.glimpseCooldown*n.range(.8,1.6),i.active=!0,i.side=n.sign(),i.x=i.side*n.range(22,38),i.d=t.d+n.range(70,110),i.time=0,this.bus.emit(`pursuit:cue`,{kind:`horse`,distance:60,pan:i.side*.8}))),!i.active){for(let e of this.flankers)this.park(e.horse,e.man);return}i.time+=e,i.d+=8*e,i.time>5&&(i.x+=i.side*10*e),this.flankers.forEach((e,t)=>{let n=i.x+i.side*t*2.4,a=i.d-t*3.2;e.horse.x=n,e.horse.z=-a,e.horse.y=r(n,a),e.horse.yaw=i.time>5?-i.side*.6:0,e.horse.speed=8,Hf.ride(e.man.pose,this.time+t,!0),e.man.pose.x=n,e.man.pose.z=-a+.05,e.man.pose.y=e.horse.y+e.horse.dims.saddleY+e.horse.bob,e.man.pose.yaw=e.horse.yaw}),(i.time>11||i.d<t.d-20)&&(i.active=!1)}},Jf=class{intent={strafe:0,push:!1,ease:!1,sprint:!1,jump:!1,lookBack:!1};update(e,t,n){let r=this.intent;r.jump=!1,r.push=!1,r.sprint=!1,r.ease=!1;let i=e.x,a=1/0;for(let n of t.chunks.values())for(let t of n.layout.route){let n=t.d-e.d;n>.5&&n<a&&(a=n,i=t.x)}let o=i-e.x;r.strafe=Math.abs(o)<.15?0:xd(o*.9,-1,1);let s=ud.radius+.1;for(let t of n.active)if(!(t.d<e.d-2||t.d>e.d+12))for(let n of t.boxes){if(n.kind===`slow`||n.kind===`solid`||e.x+s<n.minX||e.x-s>n.maxX)continue;let t=n.minD-e.d,i=n.kind===`ground`?[.1,.9]:[e.speed*.2,e.speed*.32];t>i[0]&&t<i[1]&&(r.jump=!0)}return r}};function Yf(e,t=0,n=0){let r=Math.imul(e^2654435769,2246822507);return r^=Math.imul(t+2135587861,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n+374761393,668265263),r=Math.imul(r^r>>>13,3266489909),(r^r>>>16)>>>0}var Xf=class e{state;constructor(e){this.state=e>>>0||1831565813}next(){let e=this.state=this.state+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}gaussian(){return(this.next()+this.next()+this.next()+this.next()-2)*1.732}weighted(e){let t=0;for(let n in e)t+=Math.max(0,e[n]??0);if(t<=0)return null;let n=this.next()*t;for(let t in e)if(n-=Math.max(0,e[t]??0),n<=0)return t;return null}fork(t){return new e(Yf(Math.floor(this.next()*4294967296),t))}};function Zf(){return Math.floor(Math.random()*999999)+1}var Qf=new Map;function $f(t,n,r,i,a={}){let o=Qf.get(t);if(o)return o;let s=document.createElement(`canvas`);s.width=n,s.height=r,i(s.getContext(`2d`,{willReadFrequently:!0}),n,r,new Xf(t.length*7919+n*31+r));let c=new Ki(s);return a.repeat!==!1&&(c.wrapS=c.wrapT=e),c.colorSpace=a.srgb===!1?``:Re,c.anisotropy=4,c.generateMipmaps=a.mipmaps!==!1,Qf.set(t,c),c}function ep(e,t){let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e.next();let r=(e,r)=>n[(r%t+t)%t*t+(e%t+t)%t];return(e,t)=>{let n=Math.floor(e),i=Math.floor(t),a=e-n,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=r(n,i),u=r(n+1,i),d=r(n,i+1),f=r(n+1,i+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}}function tp(e,t,n,r,i){let a=new Float32Array(t*n),o=Array.from({length:i},(t,n)=>ep(e,r<<n));for(let e=0;e<n;e++)for(let s=0;s<t;s++){let c=0,l=1,u=0;for(let a=0;a<i;a++){let i=r<<a;c+=o[a](s/t*i,e/n*i)*l,u+=l,l*=.5}a[e*t+s]=c/u}return a}var np={ground(){return $f(`ground`,256,256,(e,t,n,r)=>{let i=tp(r,t,n,4,5),a=e.createImageData(t,n);for(let e=0;e<t*n;e++){let t=.72+i[e]*.42;r.next()<.018&&(t*=.7+r.next()*.2);let n=Math.min(255,t*235);a.data[e*4]=n,a.data[e*4+1]=n*.98,a.data[e*4+2]=n*.95,a.data[e*4+3]=255}e.putImageData(a,0,0),e.globalAlpha=.08,e.strokeStyle=`#000`;for(let i=0;i<40;i++){e.lineWidth=.5+r.next()*1.5,e.beginPath();let i=r.next()*t,a=r.next()*n;e.moveTo(i,a),e.lineTo(i+r.range(-6,6),a+r.range(8,30)),e.stroke()}})},bark(){return $f(`bark`,128,256,(e,t,n,r)=>{let i=e.createImageData(t,n),a=ep(r,16),o=ep(r,8);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let s=r/t,c=e/n,l=Math.abs(Math.sin((s*14+a(s*16,c*3)*1.6)*Math.PI)),u=o(s*8,c*8),d=70+l*90+u*50,f=(e*t+r)*4;i.data[f]=d,i.data[f+1]=d*.9,i.data[f+2]=d*.8,i.data[f+3]=255}e.putImageData(i,0,0)})},wood(){return $f(`wood`,256,256,(e,t,n,r)=>{let i=e.createImageData(t,n),a=ep(r,32),o=Array.from({length:6},()=>.8+r.next()*.35);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let s=r/t,c=e/n,l=Math.floor(c*6),u=c*6%1,d=u<.04||u>.96?.45:1,f=.75+.25*Math.sin((s*40+a(s*32,c*6+l*3)*6)*Math.PI),p=150*o[l]*f*d,m=(e*t+r)*4;i.data[m]=p,i.data[m+1]=p*.86,i.data[m+2]=p*.7,i.data[m+3]=255}e.putImageData(i,0,0)})},cloth(){return $f(`cloth`,128,128,(e,t,n,r)=>{let i=e.createImageData(t,n),a=ep(r,8);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let o=(r+e)%2*.06+(r%3==0?.04:0),s=(.78+a(r/t*8,e/n*8)*.25-o)*230,c=(e*t+r)*4;i.data[c]=s,i.data[c+1]=s*.95,i.data[c+2]=s*.85,i.data[c+3]=255}e.putImageData(i,0,0)})},leaves(){return $f(`leaves`,256,256,(e,t,n,r)=>{e.clearRect(0,0,t,n);for(let i=0;i<520;i++){let i=Math.sqrt(r.next())*.47,a=r.next()*Math.PI*2,o=t/2+Math.cos(a)*i*t,s=n/2+Math.sin(a)*i*n,c=5+r.next()*9,l=120+r.next()*135;e.fillStyle=`rgb(${l*.78},${l},${l*.62})`,e.save(),e.translate(o,s),e.rotate(r.next()*Math.PI*2),e.beginPath(),e.ellipse(0,0,c,c*.45,0,0,Math.PI*2),e.fill(),e.restore()}e.strokeStyle=`rgba(70,55,40,0.9)`;for(let i=0;i<14;i++)e.lineWidth=1+r.next()*1.5,e.beginPath(),e.moveTo(t/2,n/2),e.lineTo(t/2+r.range(-.4,.4)*t,n/2+r.range(-.4,.4)*n),e.stroke()},{repeat:!1})},moss(){return $f(`moss`,128,256,(e,t,n,r)=>{e.clearRect(0,0,t,n);for(let i=0;i<160;i++){let i=r.range(.1,.9)*t,a=r.range(0,.12)*n,o=r.range(.35,.95)*n,s=150+r.next()*90;e.strokeStyle=`rgba(${s*.92},${s},${s*.86},${.55+r.next()*.45})`,e.lineWidth=.8+r.next()*1.6,e.beginPath(),e.moveTo(i,a);for(let t=0;t<10;t++)i+=r.range(-3,3),a+=o/10,e.lineTo(i,a);e.stroke()}},{repeat:!1})},grass(){return $f(`grass`,128,128,(e,t,n,r)=>{e.clearRect(0,0,t,n);for(let i=0;i<90;i++){let i=r.range(.08,.92)*t,a=r.range(.05,.6)*n,o=r.range(-18,18),s=110+r.next()*145;e.strokeStyle=`rgb(${s*.85},${s},${s*.6})`,e.lineWidth=1+r.next()*2,e.beginPath(),e.moveTo(i,n),e.quadraticCurveTo(i+o*.3,(n+a)/2,i+o,a),e.stroke()}},{repeat:!1})},cotton(){return $f(`cotton-tall`,128,256,(e,t,n,r)=>{e.clearRect(0,0,t,n),e.lineCap=`round`;let i=[];for(let a=0;a<5;a++){let a=t/2+r.range(-5,5),o=t/2+r.range(-.3,.3)*t,s=r.range(.03,.2)*n;e.strokeStyle=`rgb(${82+r.next()*30},${56+r.next()*20},36)`,e.lineWidth=2+r.next()*1.5,e.beginPath(),e.moveTo(a,n),e.quadraticCurveTo((a+o)/2+r.range(-10,10),(n+s)/2,o,s),e.stroke(),i.push([o,s]);for(let c=0;c<4;c++){let c=r.range(.2,.8),l=a+(o-a)*c,u=n+(s-n)*c,d=l+r.range(-.3,.3)*t,f=u-r.range(10,34);e.lineWidth=1+r.next(),e.beginPath(),e.moveTo(l,u),e.quadraticCurveTo((l+d)/2,u-4,d,f),e.stroke(),i.push([d,f])}}for(let t=0;t<46;t++){let[n,a]=i[t%i.length],o=60+r.next()*50;e.fillStyle=r.chance(.4)?`rgb(${o*1.4},${o*.75},${o*.4})`:`rgb(${o*.7},${o},${o*.45})`,e.beginPath(),e.ellipse(n+r.range(-10,10),a+r.range(-4,24),r.range(3,7),r.range(2,4),r.next()*3,0,Math.PI*2),e.fill()}for(let[t,n]of i){if(!r.chance(.8))continue;let i=r.range(4,6.5);for(let a=0;a<4;a++){let a=225+r.next()*30;e.fillStyle=`rgb(${a},${a},${a*.97})`,e.beginPath(),e.arc(t+r.range(-i*.6,i*.6),n+r.range(-i*.6,i*.6),i*r.range(.6,.9),0,Math.PI*2),e.fill()}}},{repeat:!1})},reeds(){return $f(`reeds`,128,256,(e,t,n,r)=>{e.clearRect(0,0,t,n);for(let i=0;i<46;i++){let i=r.range(.1,.9)*t,a=r.range(.02,.4)*n,o=r.range(-14,14),s=90+r.next()*90;e.strokeStyle=`rgb(${s*.85},${s},${s*.55})`,e.lineWidth=1.5+r.next()*2,e.beginPath(),e.moveTo(i,n),e.quadraticCurveTo(i+o*.2,(n+a)/2,i+o,a),e.stroke(),r.chance(.25)&&(e.fillStyle=`#4a3020`,e.fillRect(i+o-2.5,a+6,5,22))}},{repeat:!1})},smoke(){return $f(`smoke`,128,128,(e,t,n,r)=>{let i=e.createImageData(t,n),a=ep(r,6),o=ep(r,12);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let s=(r/t-.5)*2,c=(e/n-.5)*2,l=Math.sqrt(s*s+c*c),u=Math.max(0,1-l),d=a(r/t*6,e/n*6)*.65+o(r/t*12,e/n*12)*.35,f=Math.max(0,u*u*(.45+d*1.1)-.08),p=(e*t+r)*4;i.data[p]=i.data[p+1]=i.data[p+2]=255,i.data[p+3]=Math.min(255,f*255)}e.putImageData(i,0,0)},{repeat:!1})},glow(){return $f(`glow`,64,64,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.25,`rgba(255,255,255,0.65)`),r.addColorStop(.6,`rgba(255,255,255,0.15)`),r.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)},{repeat:!1})},parchment(){return $f(`parchment`,128,128,(e,t,n,r)=>{let i=e.createImageData(t,n),a=ep(r,8);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let o=a(r/t*8,e/n*8),s=(e*t+r)*4;i.data[s]=205+o*40,i.data[s+1]=180+o*35,i.data[s+2]=125+o*30,i.data[s+3]=255}e.putImageData(i,0,0),e.strokeStyle=`rgba(60,35,20,0.75)`,e.lineWidth=2,e.beginPath(),e.moveTo(10,n-20);for(let t=1;t<8;t++)e.lineTo(10+t*15,n-20-t*12+r.range(-8,8));e.stroke(),e.setLineDash([4,4]),e.beginPath(),e.moveTo(20,20),e.lineTo(t-15,40),e.stroke(),e.fillStyle=`rgba(60,35,20,0.9)`,e.font=`22px serif`,e.fillText(`✦`,t-32,26)})},flagUnion(){return $f(`flag-us`,192,112,(e,t,n)=>{for(let r=0;r<13;r++)e.fillStyle=r%2==0?`#9e2a2b`:`#e8e0cc`,e.fillRect(0,r*n/13,t,n/13+1);e.fillStyle=`#26315a`,e.fillRect(0,0,t*.4,n*7/13),e.fillStyle=`#e8e0cc`;for(let t=0;t<5;t++)for(let n=0;n<7;n++)e.fillRect(6+n*10.5,6+t*11,2.4,2.4);e.fillStyle=`rgba(60,40,20,0.18)`,e.fillRect(0,0,t,n)},{repeat:!1})},flagConfederate(){return $f(`flag-csa`,160,160,(e,t,n)=>{e.fillStyle=`#9b2b26`,e.fillRect(0,0,t,n),e.strokeStyle=`#e8e0cc`,e.lineWidth=30,e.beginPath(),e.moveTo(0,0),e.lineTo(t,n),e.moveTo(t,0),e.lineTo(0,n),e.stroke(),e.strokeStyle=`#2a3460`,e.lineWidth=22,e.stroke(),e.fillStyle=`rgba(60,40,20,0.2)`,e.fillRect(0,0,t,n)},{repeat:!1})},waterNormal(){return $f(`water-normal`,256,256,(e,t,n,r)=>{let i=tp(r,t,n,8,4),a=e.createImageData(t,n),o=(e,r)=>i[(r+n)%n*t+(e+t)%t];for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=(o(n+1,e)-o(n-1,e))*6,i=(o(n,e+1)-o(n,e-1))*6,s=Math.hypot(r,i,1),c=(e*t+n)*4;a.data[c]=(-r/s*.5+.5)*255,a.data[c+1]=(-i/s*.5+.5)*255,a.data[c+2]=(1/s*.5+.5)*255,a.data[c+3]=255}e.putImageData(a,0,0)},{srgb:!1})},treeline(){return $f(`treeline`,1024,128,(e,t,n,r)=>{e.clearRect(0,0,t,n),e.fillStyle=`#fff`,e.beginPath(),e.moveTo(0,n);let i=0;for(;i<=t;){let t=r.range(.35,.85)*n,a=r.range(10,34);e.quadraticCurveTo(i+a/2,n-t-r.range(0,14),i+a,n-t*r.range(.55,.8)),i+=a}e.lineTo(t,n),e.closePath(),e.fill();let a=e.createLinearGradient(0,n*.6,0,n);a.addColorStop(0,`rgba(255,255,255,1)`),a.addColorStop(1,`rgba(255,255,255,0.85)`),e.globalCompositeOperation=`source-in`,e.fillStyle=a,e.fillRect(0,0,t,n)},{repeat:!0})}},rp=[`swing`,`abduct`,`twist`,`elbow`,`wristFlex`,`pronate`,`curl`,`thumb`,`spread`],ip=.29,ap=.26,op=new K(4007193),sp=new K(8147522),cp=null;function lp(){return cp??={skin:new Vo({vertexColors:!0,roughness:.55,metalness:0}),cloth:new Vo({map:np.cloth(),color:11839371,roughness:1,side:2})}}function up(e,t){let n=e.getAttribute(`normal`),r=new Float32Array(n.count*3),i=new K;for(let e=0;e<n.count;e++){let a=Dt.smoothstep(-n.getX(e),.1,.9)*t;i.copy(op).lerp(sp,a),r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new pr(r,3)),e}function dp(e,t,n=1){let r=[];for(let n=14;n>=0;n--){let i=n/14;r.push(new H(t(i),-i*e))}let i=new Eo(r,16);return i.scale(n,1,1),i.computeVertexNormals(),i}function fp(e,t){let n=new Zi(t,Math.max(.001,e-t),4,10);return n.translate(0,-e/2,0),up(n,1)}var pp=class{root=new Tn;shoulder=new Tn;elbowJoint=new Tn;wrist=new Tn;fingers=[];thumb=[];constructor(){let{skin:e,cloth:t}=lp();this.root.add(this.shoulder);let n=e=>.049+.011*Math.sin(Math.PI*Math.min(1,e*1.1))-.006*e;this.shoulder.add(new J(up(dp(ip,n),.15),e));let r=ip*.78,i=dp(.2762,e=>n(Math.max(0,(e*.2762-.05)/ip))+.011);i.translate(0,.05,0);let a=i.getAttribute(`position`);for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getZ(e),r=1+.06*Math.sin(Math.atan2(n,t)*5+a.getY(e)*40)*Math.min(1,-a.getY(e)*6);a.setXYZ(e,t*r,a.getY(e),n*r)}i.computeVertexNormals(),this.shoulder.add(new J(i,t));let o=new J(new Ao(n(r/ip)+.013,.011,8,20),t);o.rotation.x=Math.PI/2,o.position.y=-.22619999999999998,this.shoulder.add(o),this.elbowJoint.position.y=-.29,this.shoulder.add(this.elbowJoint),this.elbowJoint.add(new J(up(new ko(.043,16,12),.15),e)),this.elbowJoint.add(new J(up(dp(ap,e=>.041+.009*Math.sin(Math.PI*Math.min(1,e*1.6))-.012*e,.86),.35),e)),this.wrist.position.y=-.26,this.elbowJoint.add(this.wrist);let s=new J(up(new ko(.03,14,10).scale(.85,1,1.05),.5),e);this.wrist.add(s);let c=new J(up(new Cf(.026,.084,.078,5,.012),1),e);c.position.set(0,-.056,.002),this.wrist.add(c);let l=new J(up(new ko(1,18,12).scale(.017,.04,.04),1),e);l.position.set(-.003,-.04,0),this.wrist.add(l);for(let t of[{z:-.03,lengths:[.043,.026,.021],r:.0095,fan:-1},{z:-.0095,lengths:[.047,.029,.022],r:.0099,fan:-.3},{z:.0105,lengths:[.044,.027,.021],r:.0093,fan:.3},{z:.0295,lengths:[.035,.021,.019],r:.0083,fan:1}]){let n=[],r=this.wrist,i=-.098,a=t.r;for(let o=0;o<3;o++){let s=new Tn;s.position.set(o===0?-.004:0,i,o===0?t.z:0),s.add(new J(fp(t.lengths[o],a),e)),r.add(s),n.push(s),r=s,i=-t.lengths[o],a*=.9}this.fingers.push({joints:n,fan:t.fan})}let u=this.wrist,d=[.034,.028,.022],f=.0115;for(let t=0;t<3;t++){let n=new Tn;t===0?n.position.set(-.008,-.045,-.03):n.position.y=-d[t-1],n.add(new J(fp(d[t],f),e)),u.add(n),this.thumb.push(n),u=n,f*=.9}this.root.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)})}apply(e){this.shoulder.rotation.set(e.swing,e.twist,e.abduct,`ZYX`),this.elbowJoint.rotation.set(e.elbow,0,0),this.wrist.rotation.set(0,e.pronate,-e.wristFlex,`YXZ`);for(let t of this.fingers){let n=[e.curl*.85,e.curl*1.1,e.curl*.75];t.joints.forEach((r,i)=>{r.rotation.set(0,i===0?t.fan*e.spread*.12:0,-n[i])})}this.thumb[0].rotation.set(.35+e.thumb*.3,0,-.2-e.thumb*.45),this.thumb[1].rotation.set(e.thumb*.2,0,-e.thumb*.45),this.thumb[2].rotation.set(e.thumb*.15,0,-e.thumb*.5)}},mp=new U(.23,-.235,.1),hp=e=>({swing:0,abduct:.1,twist:0,elbow:.3,wristFlex:0,pronate:0,curl:1,thumb:.6,spread:0,...e}),gp=hp({swing:1.4,abduct:.45,twist:-.2,elbow:.45,wristFlex:-.6,pronate:1.25,curl:.15,thumb:0,spread:1}),_p=hp({swing:1.15,abduct:.65,twist:-.35,elbow:1.45,wristFlex:-.35,pronate:1.4,curl:.25,thumb:.1,spread:.8}),vp=hp({swing:.95,abduct:.4,twist:-.25,elbow:.3,wristFlex:-.5,pronate:1.4,curl:.2,thumb:.1,spread:.7}),yp=hp({swing:.15,abduct:.08,elbow:.5,curl:.7,thumb:.4}),bp=hp({swing:.95,abduct:.42,twist:.1,elbow:1.15,curl:.55,thumb:.3,spread:.3});function xp(e,t,n,r){for(let i of rp)r[i]=Sd(e[i],t[i],n);return r}var Sp=class{root=new Tn;right=new pp;left=new pp;current={right:hp({}),left:hp({})};targetR=hp({});targetL=hp({});tmpA=hp({});airBlend=0;constructor(){this.right.root.position.copy(mp),this.left.root.position.set(-mp.x,mp.y,mp.z),this.left.root.scale.x=-1,this.root.add(this.right.root,this.left.root),this.root.name=`first-person-arms`}update(e,t){let n=xd(t.speed/ud.baseRunSpeed,0,1.4),r=n*(t.sprinting?1.25:1)*(t.exhausted?.8:1),i=t.stride*Math.PI;for(let[e,t]of[[this.targetR,Math.sin(i)],[this.targetL,-Math.sin(i)]]){let i=Math.max(0,t);e.swing=.2+.55*r*t,e.abduct=.12+.04*r,e.twist=.1*i*r,e.elbow=1.25+.28*i*r-.15*Math.max(0,-t)*r,e.wristFlex=.1,e.pronate=0,e.curl=1.05,e.thumb=.7,e.spread=0,n<.3&&xp(yp,e,n/.3,e)}let a=!t.grounded&&t.airTime>.06;this.airBlend=Td(this.airBlend,+!!a,a?10:7,e),this.airBlend>.001&&(xp(this.targetR,bp,this.airBlend,this.targetR),xp(this.targetL,bp,this.airBlend,this.targetL));let o=22;if(t.falling){let e=t.fallBody.impactAt>=0?t.fallBody.impactAt:dd.impactAt,n=this.fallPose(t.fallTime,e);if(n){Object.assign(this.targetR,n);let r=this.fallPose(Math.max(0,t.fallTime-.08),e);r&&Object.assign(this.targetL,r),this.targetL.abduct+=.08,o=t.fallTime<e?18:10}}if(t.knockedDown>0){let e=Math.min(1,t.knockedDown);xp(this.targetR,gp,e,this.targetR),xp(this.targetL,gp,e,this.targetL)}for(let t of rp)this.current.right[t]=Td(this.current.right[t],this.targetR[t],o,e),this.current.left[t]=Td(this.current.left[t],this.targetL[t],o,e);this.right.apply(this.current.right),this.left.apply(this.current.left)}fallPose(e,t){let n=dd;return e<t?xp(yp,gp,wd(0,n.impactAt*.6,e),this.tmpA):e<n.pushUpAt?(xp(gp,_p,wd(t-.05,t+.25,e),this.tmpA),this.tmpA.curl+=Math.sin(e*5.5)*.04,this.tmpA):e<n.kneelAt?xp(_p,vp,wd(n.pushUpAt,n.kneelAt,e),this.tmpA):e<n.standAt+.3?xp(vp,yp,wd(n.kneelAt,n.standAt+.3,e),this.tmpA):null}},Cp=ud.eyeHeight,wp=11,Tp=.34,Ep=.7,Dp=Math.acos(Tp/Cp);function Op(e,t,n,r,i,a){return t+(r*(n-e)-i*t)*a}var kp=class{theta=0;omega=0;neck=0;neckVel=0;roll=0;rollVel=0;twist=0;twistVel=0;eye=Cp;eyeVel=0;reach=0;impactAt=-1;handsDown=!1;groundOffset=0;side=1;reachAtRest=0;begin(e){this.side=e,this.theta=.14,this.omega=.7,this.neck=0,this.neckVel=.6,this.roll=0,this.rollVel=e*.35,this.twist=0,this.twistVel=e*.15,this.eye=Cp*Math.cos(this.theta),this.eyeVel=0,this.reach=0,this.impactAt=-1,this.handsDown=!1,this.reachAtRest=0}step(e,t,n){let r=dd,i=this.side,a=!1,o=0;if(e<r.pushUpAt){let s=3/(2*Cp)*(wp*Math.sin(this.theta)+n*Math.cos(this.theta));this.omega+=s*t,!this.handsDown&&Cp*Math.cos(this.theta)<Ep&&this.impactAt<0&&(this.handsDown=!0,this.omega*=.72),this.handsDown&&this.impactAt<0&&(this.omega*=Math.exp(-2.2*t)),this.theta+=this.omega*t,this.theta>=Dp&&(this.theta=Dp,this.omega>0&&(this.impactAt<0&&(this.impactAt=e,a=!0,this.neckVel-=1.6+this.omega*.3,this.rollVel+=i*(.8+this.omega*.15),this.twistVel+=i*.6),this.omega=this.omega>.35?-this.omega*.18:0)),this.eye=Cp*Math.cos(this.theta)+Math.max(0,this.neck)*.05,this.reach=Cp*Math.sin(this.theta)*.92,this.eyeVel=0;let c=this.impactAt>=0,l=c?wd(this.impactAt+.5,r.pushUpAt,e):0,u=c?Sd(.16,.72,l)+Math.sin(e*5.2)*.02:.28;this.neckVel=Op(this.neck,this.neckVel,u,110,11,t),this.neck+=this.neckVel*t;let d=i*(c?.18:.08);this.rollVel=Op(this.roll,this.rollVel,d,38,6.5,t),this.roll+=this.rollVel*t;let f=i*(c?.16:.04);return this.twistVel=Op(this.twist,this.twistVel,f,30,6,t),this.twist+=this.twistVel*t,this.reachAtRest=this.reach,{impact:a,feetAdvance:o}}let s=r.pushUpAt,c=r.kneelAt,l=r.standAt,u=[[s,Tp,Dp,.72,1],[s+.55,.6,1.05,.45,1],[c,.9,.62,.25,.45],[c+.3,1.05,.48,.15,.3],[l,Cp,.12,.02,0],[l+.5,Cp,.06,0,0]],d=0;for(;d<u.length-2&&e>u[d+1][0];)d++;let f=u[d],p=u[d+1],m=wd(f[0],p[0],e),h=Sd(f[1],p[1],m),g=Sd(f[2],p[2],m),_=Sd(f[3],p[3],m),v=Sd(f[4],p[4],m)*this.reachAtRest;this.eyeVel=Op(this.eye,this.eyeVel,h,120,17,t),this.eye+=this.eyeVel*t,this.omega=Op(this.theta,this.omega,g,110,17,t),this.theta+=this.omega*t,this.neckVel=Op(this.neck,this.neckVel,_,90,14,t),this.neck+=this.neckVel*t,v<this.reach&&(o=this.reach-v,this.reach=v);let y=wd(s,l,e);return this.rollVel=Op(this.roll,this.rollVel,i*.18*(1-y),40,9,t),this.roll+=this.rollVel*t,this.twistVel=Op(this.twist,this.twistVel,i*.16*(1-y),30,8,t),this.twist+=this.twistVel*t,this.eye=xd(this.eye,Tp*.9,Cp+.05),{impact:a,feetAdvance:o}}},Ap=class{x=0;d=0;y=0;vx=0;speed=0;vy=0;grounded=!0;groundHeight=0;airTime=0;stride=0;stamina=pd.max;health=fd.max;sinceHit=99;sprinting=!1;exhausted=!1;stumbleTimer=0;invulnerableTimer=0;boostTimer=0;lanternTimer=0;terrainSlow=1;inWater=!1;surface=`dirt`;knockedDown=0;fallTime=-1;fallSide=1;fallBody=new kp;reset(){this.x=0,this.d=0,this.y=0,this.vx=0,this.speed=ud.baseRunSpeed*.6,this.vy=0,this.grounded=!0,this.groundHeight=0,this.airTime=0,this.stride=0,this.stamina=pd.max,this.health=fd.max,this.sinceHit=99,this.sprinting=!1,this.exhausted=!1,this.stumbleTimer=0,this.invulnerableTimer=0,this.boostTimer=0,this.lanternTimer=0,this.terrainSlow=1,this.inWater=!1,this.surface=`dirt`,this.knockedDown=0,this.fallTime=-1}get falling(){return this.fallTime>=0}get downed(){return this.fallTime>=0&&this.fallTime<dd.standAt}get z(){return-this.d}get staminaFraction(){return this.stamina/pd.max}},jp=class{camera;settings;yaw=0;pitch=0;lookBackBlend=0;idleTime=0;roll=0;fovBoost=0;dip=0;dipVelocity=0;trauma=0;time=0;bobAmount=0;euler=new sn(0,0,0,`YXZ`);body=new wn;constructor(e,t){this.camera=e,this.settings=t}reset(){this.yaw=this.pitch=this.lookBackBlend=this.roll=this.fovBoost=0,this.dip=this.dipVelocity=this.trauma=0}get headTurn(){return Math.abs(this.yaw)+this.lookBackBlend*md.lookBackYaw}shake(e){this.trauma=Math.min(1,this.trauma+e)}kick(e){this.dipVelocity-=e}applyMouse(e,t){let n=this.settings.data;if(!n.mouseLook)return;let r=.0022*n.mouseSensitivity;this.yaw=xd(this.yaw-e*r,-md.maxYaw,md.maxYaw),this.pitch=xd(this.pitch-t*r*(n.invertY?-1:1),-md.maxPitch,md.maxPitch),(e!==0||t!==0)&&(this.idleTime=0)}update(e,t,n){let r=md,i=this.settings.data;this.time+=n,this.idleTime+=n,this.idleTime>1.5&&(this.yaw=Td(this.yaw,0,r.recenterSpeed,n),this.pitch=Td(this.pitch,0,r.recenterSpeed,n));let a=e.grounded&&!e.downed?xd(e.speed/ud.baseRunSpeed,0,1.5):0;this.bobAmount=Td(this.bobAmount,a,8,n);let o=e.sprinting?1.35:1,s=this.bobAmount*i.headBob*o,c=e.stride*Math.PI,l=-Math.abs(Math.sin(c))*r.bobAmplitude*2*s+r.bobAmplitude*s,u=Math.cos(e.stride*Math.PI)*r.swayAmplitude*s;this.dipVelocity+=(-90*this.dip-14*this.dipVelocity)*n,this.dip+=this.dipVelocity*n;let d=-(e.vx/ud.strafeSpeed)*r.strafeRoll+u*.25;this.roll=Td(this.roll,d,7,n),this.fovBoost=Td(this.fovBoost,e.sprinting||e.boostTimer>0?r.sprintFovBoost:0,4,n);let f=i.fov+this.fovBoost;Math.abs(this.camera.fov-f)>.01&&(this.camera.fov=f,this.camera.updateProjectionMatrix()),this.lookBackBlend=Td(this.lookBackBlend,+!!t,7,n),this.trauma=Math.max(0,this.trauma-n*1.4);let p=this.trauma*this.trauma,m=this.time*31,h=p*.05*Math.sin(m*1.1+1.7)*Math.cos(m*.37),g=p*.05*Math.sin(m*.9+.3)*Math.cos(m*.53+2),_=p*.06*Math.sin(m*.7+4.1),v=e.knockedDown>0?Math.min(1,e.knockedDown):0,y=e.falling?e.fallBody:null,b=(y?y.eye+y.groundOffset:ud.eyeHeight)-v*1.1;this.camera.position.set(e.x+u,e.y+b+l+this.dip,e.z-(y?y.reach:0));let x=-(e.vx/ud.strafeSpeed)*.04+(y?y.twist:0),S=Math.sin(c*2)*.004*s+this.dip*.25-v*.5-(y?y.theta:0),C=y?y.neck:0,w=this.roll+v*.4+(y?y.roll:0),T=this.yaw+x+this.lookBackBlend*r.lookBackYaw*(this.yaw>=0?1:-1)+h,E=this.pitch+S+C+g;this.euler.set(E,T,w+_),this.camera.quaternion.setFromEuler(this.euler),this.body.position.copy(this.camera.position),this.euler.set(S+C+g*.5,x+h*.5,w+_*.5),this.body.quaternion.setFromEuler(this.euler)}},Mp={left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],forward:[`KeyW`,`ArrowUp`],back:[`KeyS`,`ArrowDown`],sprint:[`ShiftLeft`,`ShiftRight`],jump:[`Space`],lookBack:[`KeyQ`]},Np=class{input;intent={strafe:0,push:!1,ease:!1,sprint:!1,jump:!1,lookBack:!1};constructor(e){this.input=e}update(){let e=this.input,t=e.isDown(...Mp.left),n=e.isDown(...Mp.right);return this.intent.strafe=!!n-+!!t,this.intent.push=e.isDown(...Mp.forward),this.intent.ease=e.isDown(...Mp.back),this.intent.sprint=e.isDown(...Mp.sprint),this.intent.jump=e.wasPressed(...Mp.jump),this.intent.lookBack=e.isDown(...Mp.lookBack),this.intent}clear(){Object.assign(this.intent,{strafe:0,push:!1,ease:!1,sprint:!1,jump:!1,lookBack:!1})}},Pp={strafe:0,push:!1,ease:!0,sprint:!1,jump:!1,lookBack:!1},Fp=class{bus;jumpBufferTimer=0;wasSprinting=!1;constructor(e){this.bus=e}update(e,t,n,r,i){this.updateFall(e,i,r),e.downed&&(t=Pp),this.updateStamina(e,t,i),this.updateForward(e,t,n,i),this.updateLateral(e,t,i),this.updateVertical(e,t,r,i),this.updateStride(e,i),e.stumbleTimer=Math.max(0,e.stumbleTimer-i),e.invulnerableTimer=Math.max(0,e.invulnerableTimer-i),e.boostTimer=Math.max(0,e.boostTimer-i),e.lanternTimer=Math.max(0,e.lanternTimer-i),e.knockedDown=Math.max(0,e.knockedDown-i)}startFall(e){e.falling||(e.fallTime=0,e.fallSide=Math.random()<.5?-1:1,e.invulnerableTimer=Math.max(e.invulnerableTimer,dd.duration+.6),e.sprinting=!1,e.fallBody.begin(e.fallSide),this.bus.emit(`player:fall`,{stage:`trip`}))}updateFall(e,t,n){if(!e.falling)return;let r=e.fallTime;e.fallTime+=t;let i=e.fallBody,a=i.impactAt<0&&e.speed>.1?dd.feetDecel:0,o=i.step(e.fallTime,t,a);o.impact&&this.bus.emit(`player:fall`,{stage:`impact`}),e.d+=o.feetAdvance,i.groundOffset=n.height(e.x,e.d+i.reach)-n.height(e.x,e.d),r<dd.pushUpAt&&e.fallTime>=dd.pushUpAt&&this.bus.emit(`player:fall`,{stage:`getup`}),e.fallTime>=dd.duration&&(e.fallTime=-1)}updateStamina(e,t,n){let r=pd,i=e.boostTimer>0,a=e.stamina>r.sprintMinimum&&!e.exhausted;e.sprinting=t.sprint&&!t.ease&&(e.sprinting?e.stamina>0&&!e.exhausted:a),i||(e.sprinting?e.stamina-=r.sprintDrain*n:t.ease?e.stamina+=r.easeRegen*n:e.exhausted?e.stamina+=r.exhaustedRegen*n:e.stamina-=r.runDrain*n),e.stamina=xd(e.stamina,0,r.max),!e.exhausted&&e.stamina<=0?(e.exhausted=!0,e.sprinting=!1,this.bus.emit(`player:exhausted`,{exhausted:!0})):e.exhausted&&e.stamina>=r.exhaustedRecover&&(e.exhausted=!1,this.bus.emit(`player:exhausted`,{exhausted:!1})),e.sprinting!==this.wasSprinting&&(this.wasSprinting=e.sprinting,this.bus.emit(`player:sprint`,{active:e.sprinting}))}updateForward(e,t,n,r){let i=ud,a=n;if(t.push&&(a*=i.pushMultiplier),t.ease&&(a*=i.easeMultiplier),e.sprinting&&(a*=i.sprintMultiplier),e.exhausted&&(a*=i.exhaustedMultiplier),e.boostTimer>0&&(a*=_d.horseshoeMultiplier),a*=e.terrainSlow,e.stumbleTimer>0){let t=e.stumbleTimer/i.stumbleDuration;a*=1-(1-i.stumbleSpeedMultiplier)*t}e.knockedDown>0&&(a=0);let o=e.downed;o&&(a=0);let s=o?e.fallBody.impactAt<0?dd.feetDecel:dd.slideDecel:a>e.speed?i.forwardAcceleration:i.forwardDeceleration;(e.grounded||a<e.speed)&&(e.speed=Ed(e.speed,a,s*r)),e.d+=e.speed*r}updateLateral(e,t,n){let r=ud,i=e.grounded?1:.6,a=e.knockedDown>0||e.downed?0:1,o=t.strafe*r.strafeSpeed*a,s=(t.strafe!==0&&Math.sign(o)===Math.sign(e.vx||o)?r.strafeAcceleration:r.strafeDeceleration)*i;e.vx=Ed(e.vx,o,s*n),e.x+=e.vx*n;let c=r.corridorHalfWidth-r.radius;e.x>c?(e.x=c,e.vx=Math.min(e.vx,0)):e.x<-c&&(e.x=-c,e.vx=Math.max(e.vx,0))}updateVertical(e,t,n,r){let i=ud,a=n.height(e.x,e.d);e.groundHeight=a,this.jumpBufferTimer=t.jump?i.jumpBuffer:Math.max(0,this.jumpBufferTimer-r);let o=(e.grounded||e.airTime<i.coyoteTime)&&e.vy<=0&&e.knockedDown<=0&&!e.downed;if(this.jumpBufferTimer>0&&o&&(this.jumpBufferTimer=0,e.vy=i.jumpVelocity,e.grounded=!1,e.airTime=i.coyoteTime,this.bus.emit(`player:jump`)),e.grounded&&(e.y-a>.35?e.grounded=!1:(e.y=a,e.vy=0,e.airTime=0)),!e.grounded&&(e.vy-=i.gravity*r,e.y+=e.vy*r,e.airTime+=r,e.y<=a)){let t=Math.min(1,-e.vy/10);e.y=a,e.vy=0,e.grounded=!0,e.airTime=0,this.bus.emit(`player:land`,{impact:t,surface:e.surface})}let s=n.waterLevel(e.d);e.inWater=e.grounded&&a<s-.08,e.surface=e.inWater?`water`:n.surface(e.x,e.d)}updateStride(e,t){if(!e.grounded||e.speed<.5||e.downed)return;let n=1.15+e.speed*.17,r=Math.floor(e.stride);if(e.stride+=e.speed/n*t,Math.floor(e.stride)!==r){let t=xd(e.speed/14,.3,1.2);this.bus.emit(`player:footstep`,{intensity:t,surface:e.surface}),e.inWater&&this.bus.emit(`player:splash`,{intensity:t})}}},Ip=class{input;player=new Ap;controller;movement;view;idle={strafe:0,push:!1,ease:!1,sprint:!1,jump:!1,lookBack:!1};constructor(e,t,n,r){this.input=e,this.controller=new Np(e),this.movement=new Fp(t),this.view=new jp(n,r)}reset(){this.player.reset(),this.view.reset(),this.controller.clear()}update(e,t,n,r,i=!1){let a;a=r===`input`?this.controller.update():r===`none`?this.idle:r;let o=this.input.consumeMouse();r===`input`&&this.view.applyMouse(o.dx,o.dy),this.movement.update(this.player,a,t,n,e),this.view.update(this.player,a.lookBack||i,e)}};function Z(e,t=``,n=``,r){let i=document.createElement(e);return t&&(i.className=t),n&&(i.textContent=n),r?.appendChild(i),i}function Lp(e,t,n,r=!1){let i=Z(`button`,r?`btn primary`:`btn`,e,n);return i.type=`button`,i.addEventListener(`click`,e=>{e.stopPropagation(),t()}),i}var Rp=class{root;hideTimer=0;constructor(e,t){this.root=Z(`div`,`screen ${t} hidden`,``,e)}get visible(){return!this.root.classList.contains(`hidden`)}show(){clearTimeout(this.hideTimer),this.root.classList.remove(`hidden`),requestAnimationFrame(()=>this.root.classList.add(`show`))}hide(e=!1){this.root.classList.remove(`show`),clearTimeout(this.hideTimer),e?this.root.classList.add(`hidden`):this.hideTimer=window.setTimeout(()=>this.root.classList.add(`hidden`),900)}},zp=class{caption;capTitle;capText;story;storyTitle;storyText;capTimer=0;storyTimer=0;constructor(e){this.caption=Z(`div`,`caption`,``,e),this.capTitle=Z(`div`,`title`,``,this.caption),Z(`div`,`rule`,``,this.caption),this.capText=Z(`div`,`text`,``,this.caption),this.story=Z(`div`,`story`,``,e),this.storyTitle=Z(`div`,`title`,``,this.story),this.storyText=Z(`div`,`text`,``,this.story)}showCaption(e,t,n=5.5){this.capTitle.textContent=e,this.capText.textContent=t,this.caption.classList.add(`show`),clearTimeout(this.capTimer),this.capTimer=window.setTimeout(()=>this.caption.classList.remove(`show`),n*1e3)}showStory(e,t,n=6){this.storyTitle.textContent=e,this.storyText.textContent=t,this.story.classList.add(`show`),clearTimeout(this.storyTimer),this.storyTimer=window.setTimeout(()=>this.story.classList.remove(`show`),n*1e3)}clear(){clearTimeout(this.capTimer),clearTimeout(this.storyTimer),this.caption.classList.remove(`show`),this.story.classList.remove(`show`)}},Bp=class{root;visible=!1;timer=0;constructor(e){this.root=Z(`div`,`debug hidden`,``,e)}toggle(){this.visible=!this.visible,this.root.classList.toggle(`hidden`,!this.visible)}update(e,t){this.visible&&(this.timer-=e,!(this.timer>0)&&(this.timer=.12,this.root.textContent=t().join(`
`)))}},Vp=class extends Rp{cause;distance;best;pieces;newBest;constructor(e,t){super(e,`dim-bg`),Z(`h1`,`gameover-title`,`The Journey Ends`,this.root),this.cause=Z(`div`,`cause`,``,this.root);let n=Z(`div`,`stats`,``,this.root);this.distance=this.stat(n,`Distance`),this.best=this.stat(n,`Best`),this.pieces=this.stat(n,`Map pieces`),this.newBest=Z(`div`,`new-best`,`Your furthest journey yet`,this.root);let r=Z(`div`,`menu-buttons`,``,this.root);Lp(`Try Again`,t.retry,r,!0),Lp(`Main Menu`,t.menu,r)}stat(e,t){let n=Z(`div`,`stat`,``,e);return Z(`div`,`label`,t,n),Z(`div`,`value`,``,n)}open(e){this.cause.textContent=e.cause,this.distance.textContent=Dd(e.distance),this.best.textContent=Dd(e.best),this.pieces.textContent=`◆ ${e.pieces}`,this.newBest.classList.toggle(`hidden`,!e.isNewBest),this.show()}},Hp=class extends Rp{constructor(e,t){super(e,`dim-bg`);let n=Z(`div`,`panel`,``,this.root);Z(`h2`,``,`How to Play`,n),Z(`p`,``,`You are always running. Move freely across the trail to find a way through — fences, wagons, fallen trees, craters. Every stumble lets the riders behind you close the distance. Run clean and you pull away.`,n);let r=Z(`div`,`keys`,``,n);for(let[e,t]of[[`W / ↑`,`Push harder`],[`S / ↓`,`Ease off — catch your breath, lose ground`],[`A D / ← →`,`Move left and right`],[`Shift`,`Sprint (burns stamina)`],[`Space`,`Vault low obstacles, leap ditches and craters`],[`Q`,`Glance back over your shoulder`],[`Mouse`,`Look around (click to capture, Esc to release)`],[`Esc / P`,`Pause`]])Z(`div`,`key`,e,r),Z(`div`,``,t,r);Z(`p`,``,`◆ Map pieces mark the route north — gather them to reveal it. Water gourds and cornbread restore stamina. A horseshoe brings a burst of speed. A lantern pushes back the dark and the fog.`,n),Z(`p`,``,`Low obstacles can be vaulted; tall ones must be avoided. There is always a way through.`,n),Lp(`Back`,t,n)}},Up=class{root;distance;level;pieces;piecesValue;stamina;staminaFill;effects;pursuit;pursuitValue;hint;lastPieces=-1;lastDistance=-1;constructor(e){this.root=Z(`div`,`layer hud hidden`,``,e);let t=Z(`div`,`hud-distance`,``,this.root);Z(`div`,`hud-label`,`Distance`,t),this.distance=Z(`div`,`value`,`0 m`,t),this.level=Z(`div`,`hud-level`,``,t),this.pieces=Z(`div`,`hud-pieces`,``,this.root),Z(`span`,`diamond`,`◆`,this.pieces),this.piecesValue=Z(`span`,``,`0`,this.pieces);let n=Z(`div`,`hud-bottom`,``,this.root);this.effects=Z(`div`,`effects`,``,n),this.stamina=Z(`div`,`stamina`,``,n),this.staminaFill=Z(`div`,`fill`,``,this.stamina),this.pursuit=Z(`div`,`pursuit`,``,this.root),Z(`span`,``,`Pursuers · `,this.pursuit),this.pursuitValue=Z(`span`,`value`,``,this.pursuit),this.hint=Z(`div`,`hint`,`Click to capture the mouse · Esc to release`,this.root)}show(){this.root.classList.remove(`hidden`),this.root.style.opacity=`1`}hide(){this.root.classList.add(`hidden`)}setHint(e){this.hint.style.opacity=e?`1`:`0`}update(e,t,n,r,i=``){this.level.textContent!==i&&(this.level.textContent=i);let a=Math.floor(t);a!==this.lastDistance&&(this.distance.textContent=Dd(a),this.lastDistance=a),n!==this.lastPieces&&(this.piecesValue.textContent=String(n),this.lastPieces>=0&&n>this.lastPieces&&(this.pieces.classList.remove(`pulse`),this.pieces.offsetWidth,this.pieces.classList.add(`pulse`)),this.lastPieces=n),this.staminaFill.style.transform=`scaleX(${e.staminaFraction.toFixed(3)})`,this.stamina.classList.toggle(`exhausted`,e.exhausted),this.stamina.classList.toggle(`sprinting`,e.sprinting);let o=[];e.boostTimer>0&&o.push(`Horseshoe ${Math.ceil(e.boostTimer)}`),e.lanternTimer>0&&o.push(`Lantern ${Math.ceil(e.lanternTimer)}`),e.exhausted&&o.push(`Exhausted`),e.health<99&&o.push(e.health<40?`Badly wounded`:`Wounded`);let s=o.join(`   ·   `);this.effects.textContent!==s&&(this.effects.textContent=s),this.pursuitValue.textContent=r>=hd.maxGap-.5?`far behind`:`${Math.max(0,Math.round(r))} m`,this.pursuit.classList.toggle(`danger`,r<hd.dangerGap)}},Wp=class{root;level;name;text;badge;timer=0;constructor(e){this.root=Z(`div`,`level-card`,``,e),Z(`div`,`bar top`,``,this.root),Z(`div`,`bar bottom`,``,this.root);let t=Z(`div`,`level-text`,``,this.root);this.level=Z(`div`,`level-number`,``,t),this.name=Z(`div`,`level-name`,``,t),Z(`div`,`rule`,``,t),this.text=Z(`div`,`level-caption`,``,t),this.badge=Z(`div`,`level-badge`,``,t)}show(e,t,n,r,i=6){this.level.textContent=e,this.name.textContent=t,this.text.textContent=n,this.badge.textContent=r?`Level unlocked`:``,this.root.classList.remove(`show`),this.root.offsetWidth,this.root.classList.add(`show`),clearTimeout(this.timer),this.timer=window.setTimeout(()=>this.root.classList.remove(`show`),i*1e3)}hide(){clearTimeout(this.timer),this.root.classList.remove(`show`)}},Gp=`1863-escape:`,Kp={get(e,t){try{let n=localStorage.getItem(Gp+e);return n===null?t:JSON.parse(n)}catch{return t}},set(e,t){try{localStorage.setItem(Gp+e,JSON.stringify(t))}catch{}}},qp=function(e){return e.Menu=`menu`,e.Playing=`playing`,e.Paused=`paused`,e.Dying=`dying`,e.GameOver=`gameover`,e}({}),Jp=class{distance=0;startDistance=0;startLevel=1;level=1;collectibles=0;mapPieces=0;hits=0;time=0;seed=0;currentMap=``;reset(e,t=1,n=0){this.distance=0,this.startDistance=n,this.startLevel=this.level=t,this.collectibles=0,this.mapPieces=0,this.hits=0,this.time=0,this.seed=e,this.currentMap=``}},Yp={get best(){return Kp.get(`best-distance`,0)},submit(e){return e>this.best&&(Kp.set(`best-distance`,Math.floor(e)),!0)},get unlockedLevel(){return Kp.get(`unlocked-level`,1)},unlockLevel(e){return e<=this.unlockedLevel?!1:(Kp.set(`unlocked-level`,e),!0)},get totalPieces(){return Kp.get(`total-pieces`,0)},addPieces(e){Kp.set(`total-pieces`,this.totalPieces+e)}},Xp=class extends Rp{record;levelButtons=[];constructor(e,t,n){super(e,`menu-bg`),Z(`h1`,`title-1863`,`1863`,this.root),Z(`div`,`subtitle`,`The Escape`,this.root),Z(`p`,`epigraph`,`Mississippi, autumn 1863. A proclamation signed in Washington says you are free — but only the Union lines can make it true, and they are somewhere to the north.`,this.root),Z(`div`,`menu-levels-label`,`Choose where to begin`,this.root);let r=Z(`div`,`menu-levels`,``,this.root);t.forEach((e,t)=>{let i=Z(`button`,`menu-level`,``,r);i.type=`button`,Z(`span`,`num`,e.title,i),Z(`span`,`name`,e.name,i);let a=Z(`span`,`state`,``,i);i.addEventListener(`click`,t=>{t.stopPropagation(),n.pickLevel(e.level)}),t===0&&i.classList.add(`first`),this.levelButtons.push({level:e.level,state:a}),a.textContent=e.startsAt>0?`From ${e.startsAt.toLocaleString(`en-US`)} m`:`From the start`});let i=Z(`div`,`menu-buttons`,``,this.root);Lp(`How to Play`,n.howTo,i),Lp(`Settings`,n.settings,i),this.record=Z(`div`,`record`,``,this.root),Z(`div`,`small-note`,`Headphones recommended`,this.root)}show(){let e=Yp.best;this.record.textContent=e>0?`Furthest journey · ${Dd(e)}`:``;let t=Yp.unlockedLevel;for(let e of this.levelButtons)e.state.parentElement.classList.toggle(`reached`,e.level<=t);super.show()}},Zp=class extends Rp{constructor(e,t){super(e,`dim-bg`),Z(`div`,`subtitle`,`Paused`,this.root).style.marginBottom=`26px`;let n=Z(`div`,`menu-buttons`,``,this.root);Lp(`Resume`,t.resume,n,!0),Lp(`Settings`,t.settings,n),Lp(`Main Menu`,t.quit,n),Z(`div`,`small-note`,`Esc or P to resume`,this.root)}},Qp=class extends Rp{settings;constructor(e,t,n){super(e,`dim-bg`),this.settings=t;let r=Z(`div`,`panel`,``,this.root);Z(`h2`,``,`Settings`,r),this.slider(r,`Master volume`,`masterVolume`,0,1,.05),this.slider(r,`Ambience volume`,`ambienceVolume`,0,1,.05),this.checkbox(r,`Mouse look`,`mouseLook`),this.slider(r,`Mouse sensitivity`,`mouseSensitivity`,.2,2.5,.05),this.checkbox(r,`Invert mouse Y`,`invertY`),this.slider(r,`Head bob`,`headBob`,0,1.5,.05),this.slider(r,`Field of view`,`fov`,60,90,1),this.select(r,`Graphics quality`,`quality`,[[`high`,`High`],[`medium`,`Medium`],[`low`,`Low`]]),Lp(`Back`,n,r)}row(e,t){let n=Z(`div`,`settings-row`,``,e);return Z(`label`,``,t,n),n}slider(e,t,n,r,i,a){let o=Z(`input`,``,``,this.row(e,t));o.type=`range`,o.min=String(r),o.max=String(i),o.step=String(a),o.value=String(this.settings.data[n]),o.addEventListener(`input`,()=>this.settings.set(n,Number(o.value)))}checkbox(e,t,n){let r=Z(`input`,``,``,this.row(e,t));r.type=`checkbox`,r.checked=!!this.settings.data[n],r.addEventListener(`change`,()=>this.settings.set(n,r.checked))}select(e,t,n,r){let i=Z(`select`,``,``,this.row(e,t));for(let[e,t]of r){let n=Z(`option`,``,t,i);n.value=e}i.value=this.settings.data[n],i.addEventListener(`change`,()=>this.settings.set(n,i.value))}},$p=class{hud;captions;menu;howTo;settingsPanel;pause;gameOver;debug;levelCard;returnTo=`menu`;constructor(e,t,n,r){this.hud=new Up(e),this.captions=new zp(e),this.levelCard=new Wp(e),Z(`div`,`flash`,``,e),this.menu=new Xp(e,r,{pickLevel:n.pickLevel,howTo:()=>this.openPanel(`howTo`,`menu`),settings:()=>this.openPanel(`settings`,`menu`)}),this.pause=new Zp(e,{resume:n.resume,settings:()=>this.openPanel(`settings`,`pause`),quit:n.quitToMenu}),this.gameOver=new Vp(e,{retry:n.retry,menu:n.quitToMenu}),this.howTo=new Hp(e,()=>this.closePanel()),this.settingsPanel=new Qp(e,t,()=>this.closePanel()),this.debug=new Bp(e)}openPanel(e,t){this.returnTo=t,(t===`menu`?this.menu:this.pause).hide(!0),(e===`howTo`?this.howTo:this.settingsPanel).show()}closePanel(){return!this.howTo.visible&&!this.settingsPanel.visible?!1:(this.howTo.hide(!0),this.settingsPanel.hide(!0),(this.returnTo===`menu`?this.menu:this.pause).show(),!0)}hideAllScreens(){for(let e of[this.menu,this.pause,this.gameOver,this.howTo,this.settingsPanel])e.hide(!0);this.levelCard.hide()}},em=new Map;function tm(e){let t=em.get(e);return t||(t=new Lr({map:np.glow(),color:e,transparent:!0,blending:2,depthWrite:!1,opacity:.55}),em.set(e,t)),t}var nm=class{object=new Tn;model=new Tn;glint;x=0;d=0;y=0;collected=!1;phase=Math.random()*Math.PI*2;collectAge=0;constructor(e,t=1.1){this.glint=new Zr(tm(e)),this.glint.scale.setScalar(t),this.object.add(this.model,this.glint)}built=!1;spawn(e,t,n){this.built||=(this.build(),this.model.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),!0),this.x=e,this.d=t,this.y=n,this.collected=!1,this.collectAge=0,this.object.visible=!0,this.object.scale.setScalar(1),this.object.position.set(e,n,-t)}update(e,t){if(this.collected){this.collectAge+=e;let t=this.collectAge/.35;this.object.position.y+=e*3,this.object.scale.setScalar(Math.max(0,1-t)),t>=1&&(this.object.visible=!1);return}this.model.rotation.y=t*1.4+this.phase,this.model.position.y=Math.sin(t*2.2+this.phase)*.06,this.glint.material.opacity=.35+.25*Math.sin(t*3.1+this.phase)}collect(){this.collected=!0,this.collectAge=0}},rm=null,im=null,am=class extends nm{type=`mapPiece`;constructor(){super(16769696,.9)}build(){if(!rm){rm=new Oo(.42,.32,6,1);let e=rm.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setZ(t,Math.sin(e.getX(t)/.42*Math.PI)*.04);rm.computeVertexNormals(),im=new Vo({map:np.parchment(),side:2,roughness:.9,emissive:3811856,emissiveIntensity:.6})}let e=new J(rm,im);e.rotation.x=-.25,this.model.add(e)}},om={gourd:new Vo({color:11569738,roughness:.6}),cork:new Vo({color:5914148,roughness:.9}),cord:new Vo({color:9074262,roughness:1}),bread:new Vo({color:14198352,roughness:.95}),iron:new Vo({color:6974062,roughness:.45,metalness:.8}),tin:new Vo({color:4867648,roughness:.5,metalness:.6}),cloth:new Vo({map:np.cloth(),color:13615264,roughness:1}),flame:new Vo({color:2759178,emissive:16752704,emissiveIntensity:3})},sm=class extends nm{type=`water`;constructor(){super(11589887,1)}build(){let e=[];for(let t=0;t<=14;t++){let n=t/14,r=n<.55?Math.sin(n/.55*Math.PI)*.17+.02:.05+Math.sin((n-.55)/.45*Math.PI)*.07;e.push(new H(Math.max(.01,r),n*.55))}let t=new J(new Eo(e,12),om.gourd);t.position.y=-.28;let n=new J(new $i(.03,.035,.06,6),om.cork);n.position.y=.3;let r=new J(new Ao(.19,.012,4,16),om.cord);r.position.y=-.05,r.rotation.x=Math.PI/2,this.model.add(t,n,r)}},cm=class extends nm{type=`food`;constructor(){super(16765072,.9)}build(){let e=new J(new Xi(.34,.1,.34),om.cloth);e.rotation.y=.4;let t=new J(new Xi(.22,.08,.16),om.bread);t.position.y=.08;let n=new J(new ko(.05,6,4),om.cloth);n.position.set(.1,.1,.1),this.model.add(e,t,n)}},lm=class extends nm{type=`horseshoe`;constructor(){super(16773312,1)}build(){let e=new J(new Ao(.17,.035,6,14,Math.PI*1.4),om.iron);e.rotation.z=-Math.PI*.2-Math.PI/2+Math.PI,this.model.add(e)}},um=class extends nm{type=`lantern`;constructor(){super(16756816,1.6)}build(){let e=new J(new $i(.12,.13,.05,8),om.tin);e.position.y=-.15;let t=new J(new $i(.1,.1,.24,8),om.flame),n=new J(new ea(.13,.12,8),om.tin);n.position.y=.18;let r=new J(new Ao(.08,.01,4,10,Math.PI),om.tin);r.position.y=.24,this.model.add(e,t,n,r)}},dm={mapPiece:()=>new am,water:()=>new sm,food:()=>new cm,horseshoe:()=>new lm,lantern:()=>new um},fm=class{bus;group=new Tn;pools=new Map;active=new Set;constructor(e,t){this.bus=t,this.group.name=`collectibles`,e.add(this.group)}populate(e,t){for(let n of e.layout.collectibles){let r=this.pools.get(n.type)??[];this.pools.set(n.type,r);let i=r.pop()??dm[n.type]();i.spawn(n.x,n.d,t(n.x,n.d)+n.y),this.group.add(i.object),this.active.add(i),e.owned.push({release:()=>this.release(i)})}}release(e){this.active.delete(e)&&(this.group.remove(e.object),this.pools.get(e.type).push(e))}update(e,t){for(let n of this.active)n.update(e,t)}collect(e){let t=_d.pickupRadius,n=e.y+1;for(let r of this.active)r.collected||Math.abs(r.d-e.d)>t||Math.abs(r.x-e.x)>t||Math.abs(r.y-n)>1.3||(r.collect(),this.applyEffect(r.type,e),this.bus.emit(`collectible:pickup`,{type:r.type,x:r.x,z:-r.d}))}applyEffect(e,t){let n=_d;switch(e){case`water`:t.stamina=Math.min(pd.max,t.stamina+n.waterStamina);break;case`food`:t.stamina=Math.min(pd.max,t.stamina+n.foodStamina);break;case`horseshoe`:t.boostTimer=n.horseshoeDuration;break;case`lantern`:t.lanternTimer=n.lanternDuration}}clear(){for(let e of[...this.active])this.release(e)}},pm={fence:{collision:`vault`,width:[4,11],depth:[.3,.3],height:1.05,damage:9,knockback:3},barrel:{collision:`vault`,width:[.8,2.4],depth:[.8,.9],height:.95,damage:8,knockback:4},wagon:{collision:`solid`,width:[2,4.4],depth:[2,4.4],height:2.6,damage:14,knockback:5},hayBale:{collision:`vault`,width:[1.3,3],depth:[1.1,1.2],height:1,damage:7,knockback:3},branch:{collision:`vault`,width:[3,6.5],depth:[.7,.9],height:.6,damage:7,knockback:2},rock:{collision:`solid`,width:[1.4,2.4],depth:[1.2,2],height:1.4,damage:12,knockback:5},plow:{collision:`vault`,width:[1.8,2.2],depth:[1.6,1.8],height:.95,damage:9,knockback:3},ditch:{collision:`ground`,width:[5,13],depth:[1.5,1.8],height:0,damage:8,knockback:0,deformation:`ditch`},fallenTree:{collision:`vault`,width:[8,17],depth:[1,1.1],height:1,damage:10,knockback:3},mudPit:{collision:`slow`,width:[3,7],depth:[3,6],height:0,damage:0,knockback:0,deformation:`mud`},water:{collision:`slow`,width:[4,9],depth:[4,8],height:0,damage:0,knockback:0,deformation:`pond`},roots:{collision:`vault`,width:[2.5,5],depth:[1.2,1.5],height:.55,damage:7,knockback:2},narrows:{collision:`solid`,width:[0,0],depth:[1.6,2.2],height:3,damage:12,knockback:5},stream:{collision:`slow`,width:[24,24],depth:[4,6],height:0,damage:0,knockback:0,deformation:`stream`,fullWidth:!0},stump:{collision:`vault`,width:[.9,1.2],depth:[.9,1.2],height:.75,damage:9,knockback:3},crater:{collision:`ground`,width:[3.4,5.6],depth:[3.4,5.6],height:0,damage:9,knockback:0,deformation:`crater`},trench:{collision:`ground`,width:[8,18],depth:[2,2.3],height:0,damage:10,knockback:0,deformation:`trench`},barricade:{collision:`solid`,width:[3,7.5],depth:[1.2,1.6],height:1.6,damage:12,knockback:5},brokenWagon:{collision:`solid`,width:[3,3.8],depth:[1.8,2.4],height:1.9,damage:13,knockback:5},debris:{collision:`vault`,width:[2,4],depth:[1,1.6],height:.7,damage:8,knockback:3},burningDebris:{collision:`solid`,width:[2,3.4],depth:[1.4,2],height:2,damage:12,knockback:4},wire:{collision:`vault`,width:[4,10],depth:[.9,1.2],height:.75,damage:9,knockback:1}},mm=class{object=new Tn;x=0;d=0;baseY=0;width=1;depth=1;boxes=[];wasHit=!1;hitAge=0;hitDir=0;rng=new Xf(1);spawnInfo;partIndex=0;get spec(){return pm[this.kind]}get damage(){return this.spec.damage}get knockback(){return this.spec.knockback}spawn(e,t){this.spawnInfo=e,this.x=e.x,this.d=e.d,this.width=e.width,this.depth=e.depth,this.baseY=t,this.wasHit=!1,this.hitAge=0,this.rng=new Xf(e.seed),this.object.position.set(e.x,t,-e.d),this.object.rotation.set(0,0,0),this.object.scale.set(1,1,1),this.partIndex=0,this.build(this.rng);for(let e=this.partIndex;e<this.object.children.length;e++)this.object.children[e].visible=!1;this.boxes=[],this.buildCollision()}buildCollision(){this.addBox(this.x,this.d,this.width,this.depth,this.spec.height,this.spec.collision)}addBox(e,t,n,r,i,a){this.boxes.push({minX:e-n/2,maxX:e+n/2,minD:t-r/2,maxD:t+r/2,height:i,kind:a})}part(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=1,u=1){let d=this.object.children[this.partIndex];return d||(d=new J(e,t),d.castShadow=!0,d.receiveShadow=!0,this.object.add(d)),d.geometry=e,d.material=t,d.visible=!0,d.position.set(n,r,i),d.rotation.set(a,o,s),d.scale.set(c,l,u),d.userData.base={px:n,py:r,pz:i,rx:a,ry:o,rz:s},this.partIndex++,d}onHit(e,t){this.wasHit=!0,this.hitAge=0,this.hitDir=e<this.x?1:-1,t.dustKick(e,this.baseY,-this.d,2.5,9073752)}update(e){this.wasHit&&(this.hitAge+=e.dt,this.animateHit(this.hitAge)),this.animate(e)}animateHit(e){if(e>.5){this.object.rotation.z=0;return}this.object.rotation.z=Math.sin(e*40)*.04*(1-e/.5)}animate(e){}release(){this.object.removeFromParent()}},hm=new K;function Q(e,t=16777215,n=0,r){let i=e.index?e.toNonIndexed():e;i.getAttribute(`uv`)||i.setAttribute(`uv`,new q(new Float32Array(i.getAttribute(`position`).count*2),2)),i.getAttribute(`normal`)||i.computeVertexNormals();let a=i.getAttribute(`position`).count,o=new Float32Array(a*3);hm.set(t);for(let e=0;e<a;e+=3){let t=n>0&&r?1+(r.next()*2-1)*n:1;for(let n=0;n<3&&e+n<a;n++)o[(e+n)*3]=hm.r*t,o[(e+n)*3+1]=hm.g*t,o[(e+n)*3+2]=hm.b*t}i.setAttribute(`color`,new q(o,3));for(let e of Object.keys(i.attributes))[`position`,`normal`,`uv`,`color`].includes(e)||i.deleteAttribute(e);return i}function gm(e){let t=yf(e,!1);if(!t)throw Error(`mergeGeometries failed — attribute mismatch`);for(let t of e)t.dispose();return t.computeBoundingSphere(),t.computeBoundingBox(),t}function _m(e,t,n,r=0,i=0,a=0){return new Xi(e,t,n).translate(r,i+t/2,a)}function vm(e,t,n,r,i=6){let a=new U().subVectors(t,e),o=a.length(),s=new $i(r,n,o,i,1,!0);s.translate(0,o/2,0);let c=new Ot().setFromUnitVectors(new U(0,1,0),a.normalize());s.applyQuaternion(c),s.translate(e.x,e.y,e.z);let l=s.getAttribute(`uv`);for(let e=0;e<l.count;e++)l.setY(e,l.getY(e)*o*.5);return s}function ym(e,t,n,r,i,a,o=.15){let s=[],c=new U;for(let l=0;l<r;l++){let r=i*e.range(.75,1.25),l=new Oo(r,r);l.rotateX(e.range(-1.2,1.2)),l.rotateY(e.range(0,Math.PI)),l.rotateZ(e.range(-.6,.6)),c.set(e.range(-1,1),e.range(-.6,1),e.range(-1,1)).normalize();let u=Math.cbrt(e.next())*.85;l.translate(t.x+c.x*n.x*u,t.y+c.y*n.y*u,t.z+c.z*n.z*u);let d=Q(l,new K(a).multiplyScalar(1+(e.next()*2-1)*o)),f=d.getAttribute(`position`),p=d.getAttribute(`normal`),m=new U;for(let e=0;e<f.count;e++)m.set((f.getX(e)-t.x)/n.x,(f.getY(e)-t.y)/n.y+.35,(f.getZ(e)-t.z)/n.z).normalize(),p.setXYZ(e,m.x,m.y,m.z);s.push(d)}return gm(s)}function bm(e,t,n=3,r,i=16777215){let a=[];for(let o=0;o<n;o++){let s=new Oo(e,t).translate(0,t/2,0);s.rotateY(o/n*Math.PI+(r?r.range(-.2,.2):0));let c=Q(s,i),l=c.getAttribute(`normal`);for(let e=0;e<l.count;e++){let t=new U(l.getX(e)*.8,.7,l.getZ(e)*.8).normalize();l.setXYZ(e,t.x,t.y,t.z)}a.push(c)}return gm(a)}function xm(e,t,n){let r=new To(t,1),i=r.getAttribute(`position`),a=new Map;for(let t=0;t<i.count;t++){let n=`${i.getX(t).toFixed(3)},${i.getY(t).toFixed(3)},${i.getZ(t).toFixed(3)}`,r=a.get(n);r===void 0&&a.set(n,r=e.range(.75,1.2)),i.setXYZ(t,i.getX(t)*r,i.getY(t)*r*.62,i.getZ(t)*r)}return r.translate(0,t*.32,0),r.computeVertexNormals(),Q(r,n,.12,e)}var Sm=new Map;function Cm(e,t){let n=Sm.get(e);return n||Sm.set(e,n=t()),n}var $={box:()=>Cm(`box`,()=>Q(new Xi(1,1,1).translate(0,.5,0),16777215)),boxC:()=>Cm(`boxC`,()=>Q(new Xi(1,1,1),16777215)),plank:e=>Cm(`plank${e}`,()=>Q(new Xi(1,1,1),e)),logX:()=>Cm(`logX`,()=>Q(new $i(1,1,1,10,1).rotateZ(Math.PI/2),16777215)),cylinder:(e=10)=>Cm(`cyl${e}`,()=>Q(new $i(1,1,1,e).translate(0,.5,0),16777215)),barrel:()=>Cm(`barrel`,()=>{let e=[];for(let t=0;t<=10;t++){let n=t/10;e.push(new H(.3+Math.sin(n*Math.PI)*.06,n*.9))}return Q(new Eo(e,14),16777215)}),hoop:()=>Cm(`hoop`,()=>Q(new Ao(1,.06,4,16).rotateX(Math.PI/2),3814704)),wheel:()=>Cm(`wheel`,()=>{let e=[Q(new Ao(1,.08,5,18),16777215)];for(let t=0;t<8;t++){let n=t/8*Math.PI;e.push(Q(new Xi(2,.06,.05).rotateZ(n),16777215))}return e.push(Q(new $i(.15,.15,.3,8).rotateX(Math.PI/2),16777215)),wm(e)}),cover:()=>Cm(`cover`,()=>Q(new $i(1,1,1,12,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2).rotateY(Math.PI/2),16777215)),rock:e=>Cm(`rock${e}`,()=>xm(new Xf(500+e),1,16777215)),sphere:()=>Cm(`sphere`,()=>Q(new To(1,1),16777215)),cone:()=>Cm(`cone`,()=>Q(new ea(1,1,7).translate(0,.5,0),16777215)),disc:()=>Cm(`disc`,()=>Q(new Qi(1,20).rotateX(-Math.PI/2),16777215)),plane:()=>Cm(`plane`,()=>Q(new Oo(1,1).rotateX(-Math.PI/2),16777215))};function wm(e){return yf(e,!1)}var Tm={uTime:{value:0},uWindStrength:{value:1}};function Em(e,t,n,r=!1){e.onBeforeCompile=e=>{r&&(e.fragmentShader=e.fragmentShader.replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
        {
          float camDist = length(vViewPosition);
          float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          if (n > smoothstep(0.6, 1.6, camDist)) discard;
        }`)),e.uniforms.uTime=Tm.uTime,e.uniforms.uWindStrength=Tm.uWindStrength,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform float uWindStrength;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        {
          vec2 basePos = vec2(0.0);
          #ifdef USE_INSTANCING
            basePos = instanceMatrix[3].xz;
          #endif
          float phase = dot(basePos, vec2(0.21, 0.13));
          float h = max(transformed.y, 0.0);
          float sway = sin(uTime * 1.6 + phase) * 0.6 + sin(uTime * 3.7 + phase * 2.3) * 0.25;
          transformed.x += sway * h * ${t.toFixed(4)} * uWindStrength;
          transformed.z += cos(uTime * 1.3 + phase) * h * ${(t*.5).toFixed(4)} * uWindStrength;
        }`)},e.customProgramCacheKey=()=>n}function Dm(){let e=new Vo({vertexColors:!0,map:np.ground(),bumpMap:np.ground(),bumpScale:1.2,roughness:.96,metalness:0}),t=new Vo({map:np.bark(),vertexColors:!0,roughness:.95});Em(t,.0025,`wind-bark`);let n=new Vo({map:np.leaves(),alphaTest:.42,side:2,vertexColors:!0,roughness:.85});Em(n,.012,`wind-leaves`);let r=new Vo({map:np.moss(),alphaTest:.3,side:2,color:10134666,roughness:1});Em(r,.02,`wind-moss`);let i=new Vo({map:np.grass(),alphaTest:.4,side:2,roughness:1});Em(i,.12,`wind-grass`);let a=new Vo({map:np.reeds(),alphaTest:.4,side:2,roughness:1});Em(a,.06,`wind-reeds`);let o=new Vo({map:np.cotton(),color:14209736,alphaTest:.4,side:2,roughness:1});Em(o,.05,`wind-cotton-tall`,!0);let s=new Vo({color:13617596,roughness:1});Em(s,.05,`wind-cotton-boll`,!0);let c=new Vo({map:np.wood(),vertexColors:!0,roughness:.92}),l=new Vo({map:np.cloth(),vertexColors:!0,roughness:1,side:2}),u=new Vo({vertexColors:!0,roughness:.85}),d=new Vo({vertexColors:!0,roughness:.95,flatShading:!0}),f=new Vo({vertexColors:!0,color:10132122,roughness:.55,metalness:.7}),p=new Vo({map:np.grass(),vertexColors:!0,roughness:1});p.map=np.ground();let m=np.waterNormal();return m.repeat.set(70,80),{ground:e,bark:t,leaves:n,moss:r,grass:i,reeds:a,cotton:o,cottonBoll:s,wood:c,cloth:l,painted:u,stone:d,iron:f,hay:p,water:new Vo({color:3816748,normalMap:m,normalScale:new H(.35,.35),roughness:.08,metalness:0,envMapIntensity:.45,transparent:!0,opacity:.9}),mud:new Vo({color:3877918,roughness:.35,metalness:0}),silhouette:new Vo({vertexColors:!0,roughness:1})}}var Om=null;function km(){return Om??=Dm()}function Am(){let e=km(),t=(e,t)=>{let n=e.clone();return n.color.setHex(t),n};return{wood:e.wood,woodDark:t(e.wood,9075304),woodWeathered:t(e.wood,12103842),woodRed:t(e.wood,11037264),charred:t(e.wood,2893346),bark:e.bark,barkDark:t(e.bark,9076854),cloth:e.cloth,clothDirty:t(e.cloth,11576458),iron:e.iron,stone:e.stone,hay:e.hay,painted:e.painted,mud:e.mud,earth:t(e.ground,5915700),leaves:e.leaves}}var jm=null,Mm=()=>jm??=Am(),Nm=class extends mm{kind=`barrel`;barrels=[];build(e){let t=Mm(),n=Math.max(1,Math.min(3,Math.round(this.width/.8)));this.barrels=[];for(let r=0;r<n;r++){let i=-this.width/2+.4+r*(this.width-.8)/Math.max(1,n-1),a=n>1&&e.chance(.25),o=e.range(-.2,.2),s=[];if(a)s.push(this.part($.barrel(),t.woodDark,i,.33,o+.45,Math.PI/2,e.range(-.5,.5),0));else{let n=e.range(0,Math.PI);s.push(this.part($.barrel(),t.woodDark,i,0,o,0,n,0)),s.push(this.part($.hoop(),t.iron,i,.16,o,0,0,0,.33,1,.33)),s.push(this.part($.hoop(),t.iron,i,.74,o,0,0,0,.33,1,.33)),s.push(this.part($.cylinder(14),t.woodDark,i,.86,o,0,0,0,.29,.03,.29))}this.barrels.push({group:s,x:i,lying:a})}}buildCollision(){for(let e of this.barrels)this.addBox(this.x+e.x,this.d,.72,.8,this.spec.height,`vault`)}animateHit(e){let t=Math.min(e,1.5);for(let n of this.barrels)for(let r of n.group){let i=r.userData.base;r.position.x=i.px+this.hitDir*t*2.2,r.position.z=i.pz-t*1.5,r.rotation.z=i.rz+this.hitDir*Math.min(1,e*4)*(Math.PI/2)*!n.lying,n.lying||(r.position.y=i.py*Math.max(.35,1-e*3)+Math.min(1,e*4)*.3)}}},Pm=class extends mm{kind=`barricade`;build(e){let t=Mm();this.part($.logX(),t.bark,0,.75,0,0,e.range(-.05,.05),0,this.width,.16,.16);let n=Math.max(3,Math.round(this.width/.55));for(let e=0;e<n;e++){let r=-this.width/2+.2+e*(this.width-.4)/(n-1),i=e%2==0?.75:-.75;this.part($.boxC(),t.woodWeathered,r,.75,0,i,0,0,.07,2,.07)}}animateHit(e){this.object.position.x=this.x+Math.sin(e*35)*.04*Math.exp(-e*6)}},Fm=class extends mm{kind=`debris`;build(e){let t=Mm(),n=Math.round(this.width*1.2);for(let r=0;r<n;r++){let n=e.range(-.45,.45)*this.width,r=e.range(-.3,.3)*this.depth;switch(e.int(0,3)){case 0:this.part($.box(),t.woodWeathered,n,0,r,e.range(-.2,.2),e.range(0,3),e.range(-.2,.2),.6,.55,.6);break;case 1:this.part($.wheel(),t.woodDark,n,.1,r,Math.PI/2-.2,0,e.range(0,3),.55,.55,.55);break;case 2:this.part($.box(),t.woodDark,n,.25,r,0,e.range(0,3),e.range(.2,.5),1.6,.06,.25);break;default:this.part($.cylinder(10),t.clothDirty,n,0,r,Math.PI/2,e.range(0,3),0,.28,.4,.28)}}}},Im=class extends mm{kind=`burningDebris`;build(e){let t=Mm();this.part($.box(),t.charred,0,0,0,0,e.range(-.3,.3),.15,this.width*.8,.8,this.depth*.7),this.part($.wheel(),t.charred,this.width*.35,.6,this.depth*.4,0,0,.3,.6,.6,.6);for(let n=0;n<4;n++)this.part($.box(),t.charred,e.range(-.5,.5)*this.width,.4,e.range(-.5,.5)*this.depth,e.range(-.6,.6),e.range(0,3),e.range(-.6,.6),1.4,.12,.15)}animate(e){Math.abs(e.playerD-this.d)>160||e.particles.fire(this.x,this.baseY+.6,-this.d,this.width*.45,e.dt,1)}},Lm=class extends mm{kind=`wire`;build(e){let t=Mm(),n=Math.max(2,Math.round(this.width/1.6)),r=[];for(let i=0;i<=n;i++){let a=-this.width/2+i*this.width/n+e.range(-.15,.15);r.push(a);for(let n of[-.35,.35]){let r=e.range(.7,.9);this.part($.box(),t.woodWeathered,a,-.15,n+e.range(-.1,.1),e.range(-.15,.15),0,e.range(-.12,.12),.06,r+.15,.06)}}for(let i=0;i<n;i++){let n=r[i],a=r[i+1],o=Math.hypot(a-n,.1);for(let r of[.2,.45,.68])for(let i of[-.35,.35])this.part($.boxC(),t.iron,(n+a)/2,r+e.range(-.04,.04),i,0,0,e.range(-.05,.05),o,.008,.008);let s=Math.hypot(a-n,.7);this.part($.boxC(),t.iron,(n+a)/2,.4,0,0,Math.atan2(.7,a-n),.35,s,.008,.008),this.part($.boxC(),t.iron,(n+a)/2,.4,0,0,-Math.atan2(.7,a-n),-.35,s,.008,.008)}}},Rm=class extends mm{kind=`crater`;smokeTimer=0;build(e){let t=Mm();for(let n=0;n<7;n++){let r=e.range(0,Math.PI*2),i=this.width/2*e.range(1,1.35);this.part($.rock(n%4),t.earth,Math.cos(r)*i,.1,Math.sin(r)*i,0,e.range(0,6),0,e.range(.2,.45),.3,e.range(.2,.45))}e.chance(.5)&&this.part($.box(),t.charred,e.range(-1,1),0,e.range(-1,1),.3,e.range(0,3),.2,1.4,.12,.2),this.smokeTimer=e.range(0,1)}buildCollision(){let e=this.width/2*.72;this.boxes.push({minX:this.x-e,maxX:this.x+e,minD:this.d-e,maxD:this.d+e,height:0,kind:`ground`,radius:e})}animateHit(){}animate(e){Math.abs(e.playerD-this.d)>90||(this.smokeTimer-=e.dt,!(this.smokeTimer>0)&&(this.smokeTimer=.35+Math.random()*.4,e.particles.spawnSmoke({x:this.x+(Math.random()-.5)*this.width*.5,y:this.baseY-.3,z:-this.d+(Math.random()-.5)*this.width*.5,vx:.3,vy:.6+Math.random()*.4,life:4+Math.random()*2,size:.8,endSize:3.5,alpha:.35,color:5591114,fadeIn:.2})))}},zm=class extends mm{kind=`trench`;build(e){let t=Mm();for(let e of[-1,1])this.part($.box(),t.woodDark,0,-1.1,e*(this.depth/2-.15),0,0,0,this.width*.95,1.05,.06);for(let n=-this.width/2+.6;n<this.width/2;n+=e.range(1.4,2.4))this.part($.box(),t.woodDark,n,-1.15,-this.depth/2+.1,0,0,0,.12,1.25,.12);e.chance(.5)&&this.part($.cylinder(10),t.woodWeathered,e.range(-.4,.4)*this.width,0,-this.depth/2-.7,0,0,0,.5,1,.5)}buildCollision(){this.addBox(this.x,this.d,this.width*.95,this.depth*.7,0,`ground`)}animateHit(){}},Bm=class extends mm{kind=`ditch`;build(e){let t=Mm();if(e.chance(.5)){let n=e.range(-.45,.45)*this.width;this.part($.box(),t.woodWeathered,n,-.05,0,0,Math.PI/2+e.range(-.2,.2),.05,.35,.06,this.depth+1.2)}for(let n=0;n<3;n++)this.part($.rock(n),t.stone,e.range(-.5,.5)*this.width,-.4,e.range(-.3,.3),0,e.range(0,6),0,.25,.25,.25)}buildCollision(){this.addBox(this.x,this.d,this.width*.92,this.depth*.65,0,`ground`)}animateHit(){}},Vm=class extends mm{kind=`fallenTree`;plateSide=0;build(e){let t=Mm(),n=.46,r=e.range(-.08,.08);this.part($.logX(),t.bark,0,n,0,0,r,e.range(-.02,.02),this.width,n,n);for(let r=0;r<5;r++){let r=e.range(-.4,.45)*this.width,i=e.range(.4,1.2)*e.sign();this.part($.logX(),t.bark,r,n*1.4,e.range(-.2,.2),i,e.range(-1,1),1,e.range(.6,1.4),.08,.08)}let i=this.x-this.width/2,a=this.x+this.width/2;this.plateSide=i<-10.5?-1:+(a>10.5),this.plateSide!==0&&this.part($.sphere(),t.earth,this.plateSide*this.width/2,.9,0,0,e.range(0,3),0,.35,1.3,1.4),e.chance(.5)&&this.part($.sphere(),t.leaves,e.range(-.3,.3)*this.width,.9,-.3,0,e.range(0,3),0,1,.5,.8)}},Hm=class extends mm{kind=`narrows`;build(e){let t=Mm(),n=Math.max(1,Math.round(this.width/2.2));for(let r=0;r<n;r++){let i=-this.width/2+this.width*(r+.5)/n,a=e.range(.7,1.1);this.part($.cylinder(9),t.bark,i,-.2,e.range(-.3,.3),e.range(-.06,.06),e.range(0,3),e.range(-.06,.06),a,e.range(4,7),a),this.part($.cone(),t.barkDark,i,-.1,0,0,e.range(0,3),0,a*1.7,1.4,a*1.7)}for(let n=0;n<3;n++)this.part($.sphere(),t.leaves,e.range(-.5,.5)*this.width,e.range(2.5,4),0,0,e.range(0,3),0,e.range(.8,1.4),.6,.8)}},Um=class extends mm{kind=`fence`;sections=[];build(e){let t=Mm(),n=Math.max(2,Math.round(this.width/2.4)+1),r=this.width/(n-1),i=-this.width/2,a=e.chance(.5)?t.woodWeathered:t.wood;this.sections=[];for(let t=0;t<n;t++){let o=i+t*r,s=e.chance(.2)?e.range(-.25,.25):e.range(-.04,.04),c=e.range(1.05,1.25);if(this.part($.box(),a,o,-.2,0,s,0,s*.5,.14,c+.2,.14),t===n-1)break;let l=0,u=e.chance(.22);for(let t=0;t<3;t++){if(u&&e.chance(.6))continue;let n=.3+t*.32,i=e.range(-.05,.05),s=u&&e.chance(.3);this.part($.plank(16777215),a,o+r/2,s?.12:n,.06,s?.4:0,e.range(-.03,.03),s?.25:i,r+.1,.12,.035),l++}this.sections.push({x0:o,x1:o+r,solid:l>0})}}buildCollision(){for(let e of this.sections)e.solid&&this.addBox(this.x+(e.x0+e.x1)/2,this.d,e.x1-e.x0+.1,.45,this.spec.height,`vault`)}animateHit(e){let t=Math.min(1,e*6);this.object.rotation.x=-.12*t*Math.exp(-e*.5),this.object.rotation.z=Math.sin(e*30)*.02*Math.exp(-e*6)}},Wm=class extends mm{kind=`hayBale`;build(e){let t=Mm(),n=Math.max(1,Math.round(this.width/1.1)),r=this.width/n;for(let i=0;i<n;i++){let n=-this.width/2+r*(i+.5),a=e.range(-.12,.12);this.part($.box(),t.hay,n,0,e.range(-.1,.1),0,a,0,r*.95,e.range(.85,.98),1),this.part($.box(),t.woodDark,n-r*.25,0,0,0,a,0,.03,.99,1.02),this.part($.box(),t.woodDark,n+r*.25,0,0,0,a,0,.03,.99,1.02)}}},Gm=class extends mm{kind=`branch`;build(e){let t=Mm(),n=.16;this.part($.logX(),t.bark,0,.18,0,0,e.range(-.15,.15),e.range(-.04,.04),this.width,n,n);for(let n=0;n<5;n++){let n=e.range(-.45,.45)*this.width,r=e.range(.8,1.6),i=e.range(-1,1);this.part($.logX(),t.bark,n+r*.3,.3,Math.sin(i)*.4,0,i+Math.PI/2,.5,r,.05,.05),this.part($.sphere(),t.leaves,n,.4,e.range(-.3,.3),0,e.range(0,3),0,e.range(.4,.7),.3,.5)}}},Km=class extends mm{kind=`roots`;build(e){let t=Mm(),n=Math.max(3,Math.round(this.width*1.4));for(let r=0;r<n;r++){let n=e.range(-.5,.5)*this.width,r=e.range(.8,1.6);this.part(Jm(r),t.barkDark,n,0,e.range(-.4,.4),0,e.range(-.8,.8),0,1,e.range(.6,1),1)}}},qm=new Map;function Jm(e){let t=Math.round(e*4)/4,n=qm.get(t);return n||(n=Q(new Ao(t/2,.09,5,10,Math.PI),16777215),qm.set(t,n)),n}var Ym=class extends mm{kind=`rock`;build(e){let t=Mm(),n=e.int(0,3);this.part($.rock(n),t.stone,0,-.15,0,0,e.range(0,Math.PI*2),0,this.width*.55,this.spec.height*1.25,this.depth*.55),e.chance(.6)&&this.part($.rock(n+4),t.stone,this.width*.45,-.1,.3,0,e.range(0,6),0,.4,.5,.4)}},Xm=class extends mm{kind=`stump`;build(e){let t=Mm(),n=this.width*.42;this.part($.cylinder(9),t.bark,0,-.1,0,e.range(-.05,.05),e.range(0,3),0,n,this.spec.height+.1,n),this.part($.cylinder(9),t.woodWeathered,0,this.spec.height-.01,0,0,0,0,n*.92,.02,n*.92);for(let r=0;r<4;r++){let i=r/4*Math.PI*2+e.range(-.3,.3);this.part($.logX(),t.bark,Math.cos(i)*n,.08,Math.sin(i)*n,0,-i,-.35,n*1.4,.09,.09)}}},Zm=class extends mm{kind=`plow`;build(e){let t=Mm(),n=e.range(-.6,.6);this.part($.box(),t.woodDark,0,.5,0,.35,n,0,.14,.14,1.7),this.part($.box(),t.iron,Math.sin(n)*.7,.05,Math.cos(n)*-.7,.6,n,0,.35,.05,.55);for(let e of[-1,1])this.part($.box(),t.woodDark,Math.cos(n)*e*.3+Math.sin(n)*.6,.55,Math.cos(n)*.6-Math.sin(n)*e*.3,-.7,n,0,.06,.06,1.1);this.width>2&&this.part($.box(),t.woodDark,-.9,.05,.2,0,e.range(0,1),0,1,.1,1)}},Qm=class extends mm{kind=`wagon`;build(e){let t=Mm(),n=this.width>=this.depth,r=(n?this.width:this.depth)*.92,i=Math.min(1.9,(n?this.depth:this.width)*.95),a=n?Math.PI/2:0,o=(e,t)=>n?[t,-e]:[e,t],[s,c]=o(0,0);this.part($.box(),t.wood,s,.75,c,0,a,0,i,.18,r);for(let e of[-1,1]){let[n,s]=o(e*i/2,0);this.part($.box(),t.wood,n,.9,s,0,a,0,.08,.55,r)}for(let e of[-1,1]){let[n,s]=o(0,e*r/2);this.part($.box(),t.wood,n,.9,s,0,a,0,i,.55,.08)}for(let[n,s]of[[r*.33,.62],[-r*.33,.48]])for(let r of[-1,1]){let[c,l]=o(r*(i/2+.08),n);this.part($.wheel(),t.woodDark,c,s,l,0,a+Math.PI/2,e.range(0,3),s,s,s)}let[l,u]=o(0,-r/2-.9);if(this.part($.box(),t.woodDark,l,.45,u,.25,a,0,.1,.1,1.9),e.chance(.55)){let[e,n]=o(0,0);this.part($.cover(),t.clothDirty,e,1.15,n,0,a,0,i/2+.05,1.2,r*.85)}else for(let n=0;n<4;n++){let[n,a]=o(e.range(-.4,.4)*i,e.range(-.35,.35)*r);this.part($.box(),e.chance(.5)?t.clothDirty:t.woodWeathered,n,.93,a,0,e.range(0,3),0,.6,.5,.6)}}},$m=class extends mm{kind=`brokenWagon`;build(e){let t=Mm(),n=this.width*.9,r=e.chance(.4)?t.charred:t.woodDark;this.part($.box(),r,0,.9,0,0,0,.1,n,.15,1.6);for(let e of[-1,1])this.part($.box(),r,0,.25,e*.75,0,0,.1,n*.95,.65,.1);this.part($.wheel(),t.woodDark,-n*.3,1.45,-.5,.2,0,e.range(0,3),.55,.55,.55),this.part($.wheel(),t.woodDark,n*.35,.12,.6,Math.PI/2-.1,0,0,.6,.6,.6);for(let r=0;r<3;r++)this.part($.box(),t.woodWeathered,e.range(-n/2,n/2),0,e.range(.4,.9),0,e.range(0,3),0,.55,.45,.55)}},eh=class extends mm{kind=`mudPit`;build(e){this.part($.disc(),km().mud,0,-.07,0,0,e.range(0,3),0,this.width/2*.95,1,this.depth/2*.95);for(let t=0;t<4;t++)this.part($.sphere(),km().mud,e.range(-.35,.35)*this.width,-.06,e.range(-.35,.35)*this.depth,0,0,0,e.range(.2,.5),.06,e.range(.2,.5))}buildCollision(){this.addBox(this.x,this.d,this.width*.8,this.depth*.8,0,`slow`)}animateHit(){}},th=class extends mm{kind=`water`;build(e){let t=Mm();for(let n=0;n<6;n++){let n=e.range(0,Math.PI*2);this.part($.disc(),t.leaves,Math.cos(n)*this.width*.3,-.19,Math.sin(n)*this.depth*.3,0,n,0,e.range(.25,.4),1,e.range(.25,.4))}}buildCollision(){}},nh=class extends mm{kind=`stream`;build(e){let t=Mm(),n=this.spawnInfo.bridge;if(!n)return;let r=n.x-this.x,i=this.depth+2.4,a=Math.round(i/.32);for(let o=0;o<a;o++){let s=-i/2+(o+.5)*(i/a);n.gap>0&&Math.abs(s)<n.gap/2||this.part($.box(),e.chance(.3)?t.woodWeathered:t.wood,r+e.range(-.05,.05),.12,s,0,e.range(-.04,.04),e.range(-.03,.03),n.width,.07,.28)}for(let e of[-1,1]){for(let a of[-i/2,-i/4,i/4,i/2])this.part($.box(),t.woodDark,r+e*n.width/2,-.6,a,0,0,0,.12,1.6,.12);n.gap===0&&this.part($.box(),t.woodDark,r+e*n.width/2,.9,0,0,0,0,.07,.07,i)}n.gap>0&&this.part($.box(),t.woodWeathered,r+.3,-.15,n.gap/2-.1,.9,.2,0,n.width*.6,.07,.28)}buildCollision(){}animateHit(){}},rh={fence:()=>new Um,barrel:()=>new Nm,wagon:()=>new Qm,hayBale:()=>new Wm,branch:()=>new Gm,rock:()=>new Ym,plow:()=>new Zm,ditch:()=>new Bm,fallenTree:()=>new Vm,mudPit:()=>new eh,water:()=>new th,roots:()=>new Km,narrows:()=>new Hm,stream:()=>new nh,stump:()=>new Xm,crater:()=>new Rm,trench:()=>new zm,barricade:()=>new Pm,brokenWagon:()=>new $m,debris:()=>new Fm,burningDebris:()=>new Im,wire:()=>new Lm},ih=class{bus;particles;group=new Tn;pools=new Map;active=new Set;debugGroup=new Tn;debugBoxes=!1;constructor(e,t,n){this.bus=t,this.particles=n,this.group.name=`obstacles`,e.add(this.group,this.debugGroup)}populate(e,t){for(let n of e.layout.obstacles){let r=this.pools.get(n.kind)??[];this.pools.set(n.kind,r);let i=r.pop()??rh[n.kind](),a=i.spec.deformation?t(n.x,n.d-n.depth):t(n.x,n.d);i.spawn(n,a),this.group.add(i.object),this.active.add(i),e.owned.push({release:()=>this.release(i)})}this.debugBoxes&&this.rebuildDebug()}release(e){this.active.delete(e)&&(e.release(),this.pools.get(e.kind).push(e))}update(e,t,n){let r={dt:e,time:t,particles:this.particles,playerD:n};for(let e of this.active)e.update(r)}collide(e){let t=ud.radius,n=1,r=null;e.terrainSlow=1;for(let i of this.active)if(!(Math.abs(i.d-e.d)>i.depth/2+3))for(let a of i.boxes){if(!this.overlaps(a,e.x,e.d,t,i))continue;let o=e.y-i.baseY;switch(a.kind){case`slow`:e.grounded&&(n=Math.min(n,yd.mudSlow));break;case`ground`:e.grounded&&!r&&e.invulnerableTimer<=0&&(r={obstacle:i,severity:.7,trip:!1});break;case`vault`:case`solid`:o<a.height-.12&&!r&&e.invulnerableTimer<=0&&(r={obstacle:i,severity:a.kind===`solid`?1:.8,trip:a.kind===`vault`&&!e.falling&&Math.random()<dd.chance})}}return e.inWater&&(n=Math.min(n,yd.waterSlow)),e.terrainSlow=n,n<1&&e.surface!==`water`&&(e.surface=`mud`),r&&this.applyHit(e,r),r}overlaps(e,t,n,r,i){return e.radius===void 0?t+r>e.minX&&t-r<e.maxX&&n+r>e.minD&&n-r<e.maxD:Math.hypot(t-i.x,n-i.d)<e.radius}applyHit(e,t){let n=t.obstacle;e.invulnerableTimer=ud.hitInvulnerability,e.stumbleTimer=ud.stumbleDuration,e.speed*=t.trip?.6:t.severity>=1?.35:.55;let r=e.x<n.x?-1:1;e.vx=t.trip?0:r*n.knockback,n.onHit(e.x,this.particles);let i=t.trip?dd.extraDamage:n.damage*(t.severity>=1?1:.8);this.bus.emit(`player:hit`,{obstacle:n.kind,severity:t.severity,damage:i,x:n.x,z:-n.d})}clear(){for(let e of[...this.active])this.release(e)}get debugEnabled(){return this.debugBoxes}setDebug(e){this.debugBoxes=e,this.rebuildDebug()}rebuildDebug(){for(let e of[...this.debugGroup.children])this.debugGroup.remove(e),e.geometry.dispose();if(!this.debugBoxes)return;let e={solid:16724016,vault:16764976,ground:3186943,slow:6356832};for(let t of this.active)for(let n of t.boxes){let r=Math.max(.05,n.height),i=new Wi(new oa(new Xi(n.maxX-n.minX,r,n.maxD-n.minD)),new Mi({color:e[n.kind],depthTest:!1}));i.position.set((n.minX+n.maxX)/2,t.baseY+r/2,-(n.minD+n.maxD)/2),this.debugGroup.add(i)}}},ah=class{particles;dustAcc=0;mistAcc=0;smokeAcc=0;tmp=new K;constructor(e){this.particles=e}update(e,t,n,r,i,a){this.dustAcc+=e*t.dust*40,this.tmp.setHex(t.dustColor);let o=t.mist>.45&&t.sunIntensity<1.6;for(;this.dustAcc>1;){--this.dustAcc;let e=2+Math.random()*(14+a);this.particles.spawnGlow({x:n+(Math.random()-.5)*16,y:o?.4+Math.random()*2.2:r+(Math.random()-.5)*3,z:i-e,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.2,vz:(Math.random()-.5)*.4,life:o?.6+Math.random()*1.2:3+Math.random()*3,size:o?.07:.035,alpha:o?1:.55,color:this.tmp,fadeIn:.3})}for(this.mistAcc+=e*t.mist*10,this.tmp.setHex(t.mistColor);this.mistAcc>1;)--this.mistAcc,this.particles.spawnSmoke({x:n+(Math.random()-.5)*50,y:.2+Math.random()*1,z:i-12-Math.random()*90,vx:.3+Math.random()*.4,vy:.03,vz:(Math.random()-.5)*.3,life:9+Math.random()*6,size:5,endSize:9,alpha:.2*t.mist,color:this.tmp,drag:0,fadeIn:.35});for(this.smokeAcc+=e*t.smoke*10;this.smokeAcc>1;){--this.smokeAcc;let e=Math.random()<.5?-1:1;this.particles.spawnSmoke({x:n+e*(6+Math.random()*40),y:.8+Math.random()*3.5,z:i-18-Math.random()*120,vx:-e*(.6+Math.random()*1.2),vy:.08,vz:(Math.random()-.5)*.5,life:12+Math.random()*8,size:6,endSize:16,alpha:.4*t.smoke,color:12169894,drag:.02,fadeIn:.3})}}},oh=`
  attribute vec3 offset;
  attribute vec4 pdata;   // size, rotation, alpha, unused
  attribute vec3 pcolor;
  varying vec2 vUv;
  varying vec4 vColor;
  #include <fog_pars_vertex>
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(offset, 1.0);
    float c = cos(pdata.y);
    float s = sin(pdata.y);
    vec2 p = vec2(c * position.x - s * position.y, s * position.x + c * position.y);
    mvPosition.xy += p * pdata.x;
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vColor = vec4(pcolor, pdata.z);
    #include <fog_vertex>
  }
`,sh=`
  uniform sampler2D map;
  uniform vec3 tint;
  varying vec2 vUv;
  varying vec4 vColor;
  #include <fog_pars_fragment>
  void main() {
    vec4 tex = texture2D(map, vUv);
    gl_FragColor = vec4(vColor.rgb * tex.rgb * tint, vColor.a * tex.a);
    if (gl_FragColor.a < 0.003) discard;
    #include <fog_fragment>
  }
`,ch=class{capacity;mesh;geometry;offsetAttr;dataAttr;colorAttr;count=0;p;l;c;tmp=new K;constructor(e,t,n,r=10){this.capacity=e;let i=new Oo(1,1);this.geometry=new Es,this.geometry.index=i.index,this.geometry.setAttribute(`position`,i.getAttribute(`position`)),this.geometry.setAttribute(`uv`,i.getAttribute(`uv`)),this.offsetAttr=new yi(new Float32Array(e*3),3).setUsage(Ue),this.dataAttr=new yi(new Float32Array(e*4),4).setUsage(Ue),this.colorAttr=new yi(new Float32Array(e*3),3).setUsage(Ue),this.geometry.setAttribute(`offset`,this.offsetAttr),this.geometry.setAttribute(`pdata`,this.dataAttr),this.geometry.setAttribute(`pcolor`,this.colorAttr),this.geometry.instanceCount=0;let a=new zo({vertexShader:oh,fragmentShader:sh,uniforms:Io.merge([X.fog,{map:{value:null},tint:{value:new K(1,1,1)}}]),transparent:!0,depthWrite:!1,blending:n,fog:!0});a.uniforms.map.value=t,this.mesh=new J(this.geometry,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.p=new Float32Array(e*6),this.l=new Float32Array(e*10),this.c=new Float32Array(e*3)}get tint(){return this.mesh.material.uniforms.tint.value}get alive(){return this.count}spawn(e){if(this.count>=this.capacity)return;let t=this.count++,n=t*6;this.p[n]=e.x,this.p[n+1]=e.y,this.p[n+2]=e.z,this.p[n+3]=e.vx??0,this.p[n+4]=e.vy??0,this.p[n+5]=e.vz??0;let r=t*10;this.l[r]=0,this.l[r+1]=e.life,this.l[r+2]=e.size,this.l[r+3]=e.endSize??e.size,this.l[r+4]=e.alpha??1,this.l[r+5]=e.rotation??Math.random()*Math.PI*2,this.l[r+6]=e.spin??0,this.l[r+7]=e.drag??0,this.l[r+8]=e.lift??0,this.l[r+9]=e.fadeIn??.15,e.color instanceof K?this.tmp.copy(e.color):this.tmp.setHex(e.color??16777215),this.c[t*3]=this.tmp.r,this.c[t*3+1]=this.tmp.g,this.c[t*3+2]=this.tmp.b}clear(){this.count=0,this.geometry.instanceCount=0}update(e){let t=this.offsetAttr.array,n=this.dataAttr.array,r=this.colorAttr.array,i=0;for(;i<this.count;){let a=i*10;this.l[a]+=e;let o=this.l[a],s=this.l[a+1];if(o>=s){this.kill(i);continue}let c=i*6,l=Math.max(0,1-this.l[a+7]*e);this.p[c+3]*=l,this.p[c+4]=this.p[c+4]*l+this.l[a+8]*e,this.p[c+5]*=l,this.p[c]+=this.p[c+3]*e,this.p[c+1]+=this.p[c+4]*e,this.p[c+2]+=this.p[c+5]*e,this.l[a+5]+=this.l[a+6]*e;let u=o/s,d=this.l[a+9],f=u<d?u/d:1-(u-d)/(1-d);t[i*3]=this.p[c],t[i*3+1]=this.p[c+1],t[i*3+2]=this.p[c+2],n[i*4]=this.l[a+2]+(this.l[a+3]-this.l[a+2])*u,n[i*4+1]=this.l[a+5],n[i*4+2]=this.l[a+4]*Math.max(0,f),r[i*3]=this.c[i*3],r[i*3+1]=this.c[i*3+1],r[i*3+2]=this.c[i*3+2],i++}this.geometry.instanceCount=this.count,this.count>0&&(this.offsetAttr.needsUpdate=!0,this.dataAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0)}kill(e){let t=--this.count;e!==t&&(this.p.copyWithin(e*6,t*6,t*6+6),this.l.copyWithin(e*10,t*10,t*10+10),this.c.copyWithin(e*3,t*3,t*3+3))}},lh=class{smoke;glow;constructor(e){this.smoke=new ch(4200,np.smoke(),1,20),this.glow=new ch(2200,np.glow(),2,21),e.add(this.smoke.mesh,this.glow.mesh)}update(e){this.smoke.update(e),this.glow.update(e)}clear(){this.smoke.clear(),this.glow.clear()}spawnSmoke(e){this.smoke.spawn(e)}spawnGlow(e){this.glow.spawn(e)}dustKick(e,t,n,r,i){let a=Math.ceil(3*r);for(let o=0;o<a;o++)this.smoke.spawn({x:e+(Math.random()-.5)*.6,y:t+.1,z:n+(Math.random()-.5)*.6,vx:(Math.random()-.5)*1.5,vy:.4+Math.random()*.8,vz:(Math.random()-.5)*1.5,life:.9+Math.random()*.8,size:.3,endSize:1.3+r,alpha:.35,color:i,drag:1.6,lift:-.2,fadeIn:.1})}splash(e,t,n,r){for(let i=0;i<6*r;i++)this.smoke.spawn({x:e+(Math.random()-.5)*.5,y:t+.05,z:n+(Math.random()-.5)*.5,vx:(Math.random()-.5)*2.2,vy:1.8+Math.random()*1.6,vz:(Math.random()-.5)*2.2-1,life:.5+Math.random()*.3,size:.12,endSize:.35,alpha:.55,color:13159616,lift:-9,fadeIn:.05})}explosion(e,t,n,r=1){for(let i=0;i<14*r;i++){let r=Math.random()*Math.PI*2,i=Math.random()*4;this.glow.spawn({x:e,y:t+.6,z:n,vx:Math.cos(r)*i,vy:2+Math.random()*5,vz:Math.sin(r)*i,life:.25+Math.random()*.35,size:1.6,endSize:4.5,alpha:.9,color:16752704,drag:3,fadeIn:.05})}for(let i=0;i<26*r;i++){let r=Math.random()*Math.PI*2,i=1+Math.random()*5;this.smoke.spawn({x:e,y:t+.3,z:n,vx:Math.cos(r)*i*.6,vy:4+Math.random()*9,vz:Math.sin(r)*i*.6,life:1.2+Math.random()*1.3,size:.6,endSize:2.4,alpha:.85,color:3878950,drag:1.2,lift:-11,fadeIn:.05})}for(let i=0;i<12*r;i++)this.smoke.spawn({x:e+(Math.random()-.5)*3,y:t+1+Math.random()*2,z:n+(Math.random()-.5)*3,vx:(Math.random()-.5)*1.5,vy:.6+Math.random(),vz:(Math.random()-.5)*1.5,life:4+Math.random()*4,size:2.5,endSize:9,alpha:.5,color:7038042,drag:.4,fadeIn:.12});for(let i=0;i<16*r;i++){let r=Math.random()*Math.PI*2,i=4+Math.random()*7;this.glow.spawn({x:e,y:t+.5,z:n,vx:Math.cos(r)*i,vy:4+Math.random()*8,vz:Math.sin(r)*i,life:.5+Math.random()*.6,size:.12,endSize:.05,alpha:1,color:16760944,lift:-14,fadeIn:.02})}}muzzle(e,t,n,r,i,a){this.glow.spawn({x:e,y:t,z:n,life:a?.18:.09,size:a?3.5:.9,endSize:a?5:1.4,alpha:1,color:16765072,fadeIn:.01});let o=a?10:3;for(let s=0;s<o;s++){let o=(a?7:3)*(.4+Math.random());this.smoke.spawn({x:e,y:t,z:n,vx:r*o+(Math.random()-.5),vy:.3+Math.random()*.5,vz:i*o+(Math.random()-.5),life:(a?7:4)+Math.random()*3,size:a?1.5:.6,endSize:a?9:3.5,alpha:a?.75:.55,color:14276303,drag:1.1,lift:.15,fadeIn:.04})}}fire(e,t,n,r,i,a=1){let o=22*a*r,s=Math.floor(o*i+Math.random());for(let i=0;i<s;i++)this.glow.spawn({x:e+(Math.random()-.5)*r*1.6,y:t+Math.random()*.3,z:n+(Math.random()-.5)*r*1.6,vx:(Math.random()-.5)*.4,vy:1.2+Math.random()*1.4,vz:(Math.random()-.5)*.4,life:.5+Math.random()*.5,size:.9*r,endSize:.2,alpha:.85,color:Math.random()<.3?16765562:16742950,spin:(Math.random()-.5)*2,fadeIn:.15});Math.random()<i*5*a&&this.glow.spawn({x:e+(Math.random()-.5)*r,y:t+.5,z:n+(Math.random()-.5)*r,vx:(Math.random()-.5)*1.5,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*1.5,life:1.5+Math.random(),size:.07,alpha:1,color:16756816,drag:.6,fadeIn:.05}),Math.random()<i*4*a&&this.smoke.spawn({x:e+(Math.random()-.5)*r,y:t+1.2*r,z:n+(Math.random()-.5)*r,vx:.6+Math.random()*.5,vy:1.4+Math.random(),vz:(Math.random()-.5)*.4,life:5+Math.random()*3,size:1.2*r,endSize:6*r,alpha:.55,color:2893603,drag:.2,fadeIn:.1})}},uh={clear:{clouds:-.15,sun:1.05,hemi:1,fog:.85,rain:0,lightning:0,wind:.8,saturation:1.05,dust:1,mist:0,gloom:0,wet:0,exposure:1},hazy:{clouds:0,sun:.85,hemi:1.05,fog:1.35,rain:0,lightning:0,wind:.6,saturation:.92,dust:1.4,mist:.1,gloom:.05,wet:0,exposure:1.03},overcast:{clouds:.5,sun:.35,hemi:1.15,fog:1.2,rain:0,lightning:0,wind:1.1,saturation:.82,dust:.6,mist:.05,gloom:.45,wet:.1,exposure:1.05},fog:{clouds:.35,sun:.4,hemi:1.15,fog:2.6,rain:0,lightning:0,wind:.3,saturation:.75,dust:.3,mist:.6,gloom:.3,wet:.3,exposure:1.06},drizzle:{clouds:.55,sun:.3,hemi:1.1,fog:1.45,rain:.35,lightning:0,wind:1.1,saturation:.78,dust:.15,mist:.15,gloom:.55,wet:.6,exposure:1.05},rain:{clouds:.7,sun:.18,hemi:1,fog:1.8,rain:.8,lightning:.4,wind:1.5,saturation:.7,dust:0,mist:.2,gloom:.75,wet:1,exposure:1.06},storm:{clouds:.85,sun:.1,hemi:.85,fog:2,rain:1,lightning:5,wind:2.1,saturation:.62,dust:0,mist:.25,gloom:1,wet:1,exposure:1.08}},dh={weights:{clear:26,hazy:18,overcast:16,fog:10,drizzle:12,rain:11,storm:7},duration:[70,160],transition:22,maxDrops:7e3,gloomColor:5988195},fh=`
  attribute vec3 seed;   // 0..1 position in the rain box
  attribute float tip;   // 0 = bottom of the streak, 1 = top
  uniform float uTime;
  uniform vec3 uCam;
  uniform vec3 uBox;
  uniform vec2 uWind;
  uniform float uSpeed;
  uniform float uLength;
  varying float vTip;
  varying float vDist;
  void main() {
    vec3 fall = vec3(uWind.x, -uSpeed, uWind.y);
    // Each drop falls through a box that wraps around the camera, so the
    // same few thousand drops make endless rain wherever you are.
    vec3 p = seed * uBox + fall * uTime;
    p = mod(p - uCam + uBox * 0.5, uBox) + uCam - uBox * 0.5;
    p -= normalize(fall) * uLength * tip;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vTip = tip;
    vDist = -mv.z;
  }
`,ph=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vTip;
  varying float vDist;
  void main() {
    // Brighter head, fading tail; drops very close or far fade out.
    float a = uOpacity * mix(1.0, 0.15, vTip) * smoothstep(0.4, 1.6, vDist) * (1.0 - smoothstep(14.0, 22.0, vDist));
    gl_FragColor = vec4(uColor, a);
  }
`,mh=class{mesh;material;geometry;time=0;constructor(e){let t=dh.maxDrops,n=new Float32Array(t*2*3),r=new Float32Array(t*2);for(let e=0;e<t;e++){let t=Math.random(),i=Math.random(),a=Math.random();n.set([t,i,a,t,i,a],e*6),r[e*2+1]=1}this.geometry=new Dr,this.geometry.setAttribute(`position`,new pr(new Float32Array(t*2*3),3)),this.geometry.setAttribute(`seed`,new pr(n,3)),this.geometry.setAttribute(`tip`,new pr(r,1)),this.geometry.setDrawRange(0,0),this.material=new zo({vertexShader:fh,fragmentShader:ph,uniforms:{uTime:{value:0},uCam:{value:new U},uBox:{value:new U(36,18,36)},uWind:{value:new H},uSpeed:{value:17},uLength:{value:.75},uColor:{value:new K(12107460)},uOpacity:{value:.35}},transparent:!0,depthWrite:!1}),this.mesh=new Wi(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=22,this.mesh.name=`rain`,e.add(this.mesh)}update(e,t,n,r,i){this.time+=e;let a=Math.floor(dh.maxDrops*Math.min(1,n));if(this.geometry.setDrawRange(0,a*2),this.mesh.visible=a>0,!this.mesh.visible)return;let o=this.material.uniforms;o.uTime.value=this.time,o.uCam.value.copy(t.position),o.uWind.value.set(1.6*r,.6*r),o.uOpacity.value=.18+.25*n,o.uColor.value.setRGB(.55+.4*i,.57+.4*i,.6+.4*i)}},hh={pelvis:1,torso:1,head:1,upperArm:2,forearm:2,hand:2,thigh:2,shin:2,foot:2,kepi:1,slouch:1,rifle:1,pack:1},gh=new G().makeScale(0,0,0),_h=class{mesh;free=[];high=0;constructor(e,t,n){this.mesh=new Di(e,t,n),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.instanceMatrix.setUsage(Ue),this.mesh.count=0,this.mesh.setColorAt(0,new K(1,1,1));for(let e=n-1;e>=0;e--)this.free.push(e)}alloc(e){let t=this.free.pop();return t===void 0?-1:(this.mesh.setColorAt(t,e),this.mesh.instanceColor.needsUpdate=!0,t+1>this.high&&(this.mesh.count=this.high=t+1),t)}release(e){this.mesh.setMatrixAt(e,gh),this.free.push(e)}},vh=class{style;pose=Lf();isStatic=!1;dirty=!0;alive=!0;lod=0;lodApplied=-1;t=0;slots=[];constructor(e){this.style=e}},yh=class e{capacity;pools=new Map;static NEAR=38;figures=new Set;group=new Tn;m={root:new G,spine:new G,head:new G,a:new G,b:new G,c:new G,t:new G,r:new G};e=new sn;q=new Ot;v=new U;s=new U;color=new K;frame=0;constructor(e,t=420){this.capacity=t;let n=new Vo({vertexColors:!0,roughness:.92}),r=new Vo({vertexColors:!0,roughness:.6}),i=new Vo({vertexColors:!0,roughness:.7,metalness:.15}),a=If,o=(e,n,r)=>{let i=new _h(Pf(1.7,n),r,t*hh[e]),a=new _h(Pf(5,n),r,t*hh[e]);a.mesh.castShadow=!1,i.mesh.name=`human:${e}`,a.mesh.name=`human:${e}:far`,this.pools.set(e,[i,a]),this.group.add(i.mesh,a.mesh)};o(`pelvis`,()=>a.pelvis(),n),o(`torso`,()=>a.torso(),n),o(`head`,()=>a.head(),r),o(`upperArm`,()=>a.upperArm(),n),o(`forearm`,()=>a.forearm(),n),o(`hand`,()=>a.hand(),r),o(`thigh`,()=>a.thigh(),n),o(`shin`,()=>a.shin(),n),o(`foot`,()=>a.foot(),i),o(`kepi`,()=>a.kepi(),n),o(`slouch`,()=>a.slouchHat(),n),o(`rifle`,()=>a.rifle(),i),o(`pack`,()=>a.pack(),n),this.group.name=`humans`,e.add(this.group)}get count(){return this.figures.size}spawn(e){if(this.figures.size>=this.capacity)return null;let t=new vh(e),n=(e,n,r=0)=>{let[i,a]=this.pools.get(e);this.color.setHex(n);let o=i.alloc(this.color),s=a.alloc(this.color);o>=0&&s>=0?t.slots.push({part:e,index:[o,s],side:r}):(o>=0&&i.release(o),s>=0&&a.release(s))};n(`pelvis`,e.trousers),n(`torso`,e.coat),n(`head`,e.skin);for(let t of[-1,1])n(`upperArm`,e.sleeves,t),n(`forearm`,e.sleeves,t),n(`hand`,e.skin,t),n(`thigh`,e.trousers,t),n(`shin`,e.trousers,t),n(`foot`,e.feet,t);return e.hat===`kepi`&&n(`kepi`,e.hatColor),e.hat===`slouch`&&n(`slouch`,e.hatColor),e.rifle&&n(`rifle`,16777215),e.pack&&n(`pack`,6969924),this.figures.add(t),t}remove(e){if(e&&this.figures.delete(e)){for(let t of e.slots){let[e,n]=this.pools.get(t.part);e.release(t.index[0]),n.release(t.index[1])}e.slots=[],e.alive=!1}}clear(){for(let e of[...this.figures])this.remove(e)}update(t){this.frame++;for(let n of this.figures){let r=Math.hypot(n.pose.x-t.x,n.pose.z-t.z),i=r<e.NEAR-(n.lod===0?-4:0)?0:1;i!==n.lod&&(n.lod=i,n.dirty=!0),(!n.isStatic||n.dirty)&&(r>160&&!n.dirty&&(this.frame+(n.slots[0]?.index[0]??0))%3!=0||(this.pose(n),n.dirty=!1))}for(let[e,t]of this.pools.values())e.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceMatrix.needsUpdate=!0}rot(e,t,n,r,i=`YXZ`){return this.e.set(t,n,r,i),e.makeRotationFromEuler(this.e)}set(e,t,n,r){for(let i of t.slots)if(i.part===e&&i.side===n){let n=this.pools.get(e);n[t.lod].mesh.setMatrixAt(i.index[t.lod],r),t.lodApplied!==t.lod&&n[1-t.lod].mesh.setMatrixAt(i.index[1-t.lod],gh);return}}pose(e){let t=e.pose,n=this.m,r=e.style.build;this.e.set(t.pitch,t.yaw,t.roll,`YXZ`),this.q.setFromEuler(this.e),n.root.compose(this.v.set(t.x,t.y,t.z),this.q,this.s.set(r,r,r)),this.set(`pelvis`,e,0,n.root),n.spine.copy(n.root).multiply(n.t.makeTranslation(0,kf.spineOffset,0)).multiply(this.rot(n.r,t.spinePitch,t.spineYaw,t.spineRoll)),this.set(`torso`,e,0,n.spine),this.set(`pack`,e,0,n.spine),n.head.copy(n.spine).multiply(n.t.makeTranslation(0,kf.neckHeight,0)).multiply(this.rot(n.r,t.headPitch,t.headYaw,t.headRoll)),this.set(`head`,e,0,n.head),this.set(`kepi`,e,0,n.head),this.set(`slouch`,e,0,n.head);for(let r of[-1,1]){let[i,a,o]=r<0?t.lArm:t.rArm;n.a.copy(n.spine).multiply(n.t.makeTranslation(r*kf.shoulderWidth,kf.shoulderHeight,0)).multiply(n.r.makeRotationZ(r*a)).multiply(n.c.makeRotationX(i)),this.set(`upperArm`,e,r,n.a),n.b.copy(n.a).multiply(n.t.makeTranslation(0,-kf.upperArm,0)).multiply(n.r.makeRotationX(o)),this.set(`forearm`,e,r,n.b),n.c.copy(n.b).multiply(n.t.makeTranslation(0,-kf.forearm,0)),this.set(`hand`,e,r,n.c)}for(let r of[-1,1]){let[i,a,o]=r<0?t.lLeg:t.rLeg;n.a.copy(n.root).multiply(n.t.makeTranslation(r*kf.hipWidth,0,0)).multiply(n.r.makeRotationZ(r*a)).multiply(n.c.makeRotationX(i)),this.set(`thigh`,e,r,n.a),n.b.copy(n.a).multiply(n.t.makeTranslation(0,-kf.thigh,0)).multiply(n.r.makeRotationX(-o)),this.set(`shin`,e,r,n.b),n.c.copy(n.b).multiply(n.t.makeTranslation(0,-kf.shin,0)).multiply(n.r.makeRotationX(-t.ankle+o*.3)),this.set(`foot`,e,r,n.c)}if(e.style.rifle){switch(t.rifle){case`aim`:n.a.copy(n.spine).multiply(n.t.makeTranslation(.13,.4,-.36)).multiply(this.rot(n.r,.02,-.12,0));break;case`port`:n.a.copy(n.spine).multiply(n.t.makeTranslation(.02,.28,-.24)).multiply(this.rot(n.r,0,-Math.PI/2,2.2,`ZYX`));break;case`hand`:n.a.copy(n.spine).multiply(n.t.makeTranslation(.3,.18,-.12)).multiply(this.rot(n.r,Math.PI/2-.25,0,0));break;case`slung`:n.a.copy(n.spine).multiply(n.t.makeTranslation(0,.3,.18)).multiply(this.rot(n.r,0,-Math.PI/2,2.2,`ZYX`));break;default:n.a.copy(gh)}this.set(`rifle`,e,0,n.a)}e.lodApplied=e.lod}muzzle(e,t){let n=e.pose,r=-Math.sin(n.yaw),i=-Math.cos(n.yaw);return t.set(n.x+r*1.15+Math.cos(n.yaw)*.15,n.y+kf.spineOffset+.45,n.z+i*1.15-Math.sin(n.yaw)*.15)}},bh=(e,t=1)=>{let n=e.index?e.toNonIndexed():e;n.computeVertexNormals();let r=n.getAttribute(`position`).count;n.setAttribute(`color`,new pr(new Float32Array(r*3).fill(t),3)),n.getAttribute(`uv`)||n.setAttribute(`uv`,new pr(new Float32Array(r*2),2));for(let e of Object.keys(n.attributes))[`position`,`normal`,`uv`,`color`].includes(e)||n.deleteAttribute(e);return n},xh=e=>yf(e,!1),Sh={legTop:1,upperLeg:.5,lowerLeg:.52,front:-.58,hind:.58,hipWidth:.17,neckY:1.32,neckZ:-.72,tailY:1.3,tailZ:.86,saddleY:1.66},Ch={legTop:.36,upperLeg:.19,lowerLeg:.2,front:-.24,hind:.24,hipWidth:.07,neckY:.5,neckZ:-.3,tailY:.5,tailZ:.33,saddleY:.5};function wh(){let e=Of(Df(.12,Ef([0,1.26,.05],[.29,.34,.72]),Ef([0,1.24,-.5],[.27,.36,.32]),Ef([0,1.32,.6],[.3,.34,.34]),Ef([0,1.5,-.42],[.12,.14,.26]),Tf([0,1.4,-.6],[0,1.92,-.98],.23,.13),Tf([0,2,-1.02],[0,1.66,-1.38],.11,.075),Ef([0,1.88,-1.1],[.095,.12,.13]),Tf([.055,2.06,-1],[.07,2.2,-.98],.03,.008),Tf([-.055,2.06,-1],[-.07,2.2,-.98],.03,.008),Tf([0,1.66,-.5],[0,2.06,-.94],.05,.035),Tf([0,1.42,.92],[0,.78,1.12],.075,.035)),[-.42,.68,-1.5],[.42,2.3,1.25],.035,(e,t,n)=>n>.86&&t<1.4||t>1.62&&n<-.45&&n>-1&&Math.abs(e)<.06&&t>1.4+(-n-.45)*.9?.35:n<-1.28?.55:1),t=Of(Df(.05,Tf([0,.08,0],[0,-.48,.02],.12,.06),Ef([0,-.1,0],[.1,.18,.11])),[-.16,-.6,-.16],[.16,.25,.16],.025),n=Of(Df(.03,Tf([0,.02,0],[0,-.36,0],.055,.042),Ef([0,-.38,.01],[.055,.05,.06]),Tf([0,-.4,.01],[0,-.47,-.02],.045,.05),Tf([0,-.48,-.02],[0,-.52,-.03],.068,.07)),[-.1,-.6,-.12],[.1,.1,.12],.018,(e,t)=>t<-.47?.2:1),r=new $i(.27,.29,.08,18,1).scale(.9,1,1.3).translate(0,1.63,.02),i=new Xi(.72,.025,.62).translate(0,1.6,.02);return{body:e,upper:t,lower:n,tack:xh([Eh(r,.6),Eh(i,.85)])}}function Th(){return{body:Of(Df(.05,Ef([0,.48,-.12],[.11,.14,.2]),Ef([0,.5,.15],[.09,.1,.18]),Tf([0,.52,-.25],[0,.66,-.36],.07,.055),Ef([0,.68,-.4],[.065,.07,.08]),Tf([0,.67,-.42],[0,.63,-.56],.045,.03),Ef([.06,.62,-.37],[.018,.07,.045]),Ef([-.06,.62,-.37],[.018,.07,.045]),Tf([0,.55,.3],[0,.72,.46],.025,.012)),[-.16,.3,-.62],[.16,.8,.5],.016,(e,t,n)=>Math.abs(e)>.045&&t<.68&&n<-.3?.45:n<-.52?.4:1),upper:Of(Tf([0,.03,0],[0,-.19,0],.04,.025),[-.06,-.24,-.06],[.06,.09,.06],.012),lower:Of(Df(.02,Tf([0,0,0],[0,-.18,0],.022,.018),Ef([0,-.2,-.015],[.025,.02,.035])),[-.05,-.25,-.06],[.05,.04,.05],.01)}}function Eh(e,t){return bh(e,t)}var Dh=new G().makeScale(0,0,0),Oh=class{dims;x=0;y=0;z=0;yaw=0;phase=Math.random()*10;speed=0;bob=0;sway=0;slots=[];constructor(e){this.dims=e}saddle(e){return e.set(this.x,this.y+this.dims.saddleY+this.bob,this.z)}},kh=class{dims;capacity;meshes=new Map;animals=new Set;m=new G;m2=new G;m3=new G;root=new G;color=new K;constructor(e,t,n,r){this.dims=t,this.capacity=r;let i=n===`horse`?wh():Th(),a=new Vo({vertexColors:!0,roughness:n===`horse`?.55:.8});for(let[t,o]of Object.entries(i)){let i=t===`upper`||t===`lower`?4:1,s=new Di(o,a,r*i);s.frustumCulled=!1,s.castShadow=!0,s.count=0,s.instanceMatrix.setUsage(Ue),s.setColorAt(0,this.color.set(1,1,1)),s.name=`${n}:${t}`;let c=[];for(let e=r*i-1;e>=0;e--)c.push(e);this.meshes.set(t,{mesh:s,free:c,high:0}),e.add(s)}}spawn(e,t=3811868){if(this.animals.size>=this.capacity)return null;let n=new Oh(this.dims);for(let[r,i]of this.meshes){let a=r===`upper`||r===`lower`?4:1;for(let o=0;o<a;o++){let a=i.free.pop();a!==void 0&&(i.mesh.setColorAt(a,this.color.setHex(r===`tack`?t:e)),i.mesh.instanceColor.needsUpdate=!0,a+1>i.high&&(i.mesh.count=i.high=a+1),n.slots.push({part:r,index:a,leg:o}))}}return this.animals.add(n),n}remove(e){if(e&&this.animals.delete(e)){for(let t of e.slots){let e=this.meshes.get(t.part);e.mesh.setMatrixAt(t.index,Dh),e.free.push(t.index)}e.slots=[]}}clear(){for(let e of[...this.animals])this.remove(e)}update(e){let t=this.dims;for(let n of this.animals){let r=1.6+n.speed*.11;n.phase+=e*r*Math.PI*2*Math.min(1,n.speed/2+.05);let i=Math.min(1,n.speed/7);n.bob=Math.abs(Math.sin(n.phase))*.12*i;let a=Math.sin(n.phase)*.07*i;this.m.makeRotationY(n.yaw),this.root.makeTranslation(n.x,n.y+n.bob,n.z).multiply(this.m).multiply(this.m2.makeRotationX(a));let o=[[-t.hipWidth,t.front,0],[t.hipWidth,t.front,.35],[-t.hipWidth,t.hind,Math.PI],[t.hipWidth,t.hind,Math.PI+.35]];for(let e of n.slots){let r=this.meshes.get(e.part);switch(e.part){case`body`:case`tack`:r.mesh.setMatrixAt(e.index,this.root);break;case`upper`:case`lower`:{let[a,s,c]=o[e.leg],l=n.phase+c,u=s<0,d=Math.sin(l)*.65*i,f=Math.max(0,Math.sin(l+(u?1.2:-.6)))*(u?-1.3:1)*i;this.m.copy(this.root).multiply(this.m2.makeTranslation(a,t.legTop,s)).multiply(this.m3.makeRotationX(d)),e.part===`lower`&&this.m.multiply(this.m2.makeTranslation(0,-t.upperLeg,0)).multiply(this.m3.makeRotationX(f)),r.mesh.setMatrixAt(e.index,this.m);break}}}}for(let e of this.meshes.values())e.mesh.instanceMatrix.needsUpdate=!0}},Ah=class{humans;horses;hounds;constructor(e){this.humans=new yh(e,560),this.horses=new kh(e,Sh,`horse`,14),this.hounds=new kh(e,Ch,`hound`,8)}update(e,t){this.horses.update(e),this.hounds.update(e),this.humans.update(t)}clear(){this.humans.clear(),this.horses.clear(),this.hounds.clear()}};function jh(){let e=vd.groundWidth/2,t=ud.corridorHalfWidth+4,n=[];for(let e=-t;e<=t+1e-6;e+=.8)n.push(e);let r=1,i=t,a=[];for(;i<e;)i=Math.min(e,i+r),a.push(i),r*=1.2;return[...a.map(e=>-e).reverse(),...n,...a]}var Mh=jh(),Nh=1,Ph=Math.round(vd.chunkLength/Nh)+1,Fh=class{mesh;geometry;heights;tmpColor=new K;stain=new K;constructor(){let e=Mh.length,t=e*Ph,n=new Dr;n.setAttribute(`position`,new pr(new Float32Array(t*3),3)),n.setAttribute(`normal`,new pr(new Float32Array(t*3),3)),n.setAttribute(`color`,new pr(new Float32Array(t*3),3)),n.setAttribute(`uv`,new pr(new Float32Array(t*2),2));let r=[];for(let t=0;t<Ph-1;t++)for(let n=0;n<e-1;n++){let i=t*e+n,a=i+1,o=i+e,s=o+1;r.push(i,a,o,a,s,o)}n.setIndex(r),this.geometry=n,this.heights=new Float32Array((e+2)*(Ph+2)),this.mesh=new J(n,km().ground),this.mesh.receiveShadow=!0,this.mesh.name=`ground`,this.mesh.matrixAutoUpdate=!1}build(e,t,n){let r=Mh.length,i=r+2,a=this.geometry.getAttribute(`position`),o=this.geometry.getAttribute(`normal`),s=this.geometry.getAttribute(`color`),c=this.geometry.getAttribute(`uv`),l=e=>e<0?2*Mh[0]-Mh[1]:e>=r?2*Mh[r-1]-Mh[r-2]:Mh[e];for(let a=-1;a<=Ph;a++){let o=e+a*Nh,s=t.blendAt(o);for(let e=-1;e<=r;e++){let r=l(e),c=t.baseHeight(r,o,s);for(let e of n)c+=e.height(r,o,!1);this.heights[(a+1)*i+(e+1)]=c}}let u=Math.floor(e/1e3)*1e3;for(let d=0;d<Ph;d++){let f=e+d*Nh,p=t.blendAt(f);for(let m=0;m<r;m++){let h=d*r+m,g=Mh[m],_=this.heights[(d+1)*i+(m+1)];a.setXYZ(h,g,_,-(f-e));let v=this.heights[(d+1)*i+m],y=this.heights[(d+1)*i+m+2],b=this.heights[d*i+(m+1)],x=this.heights[(d+2)*i+(m+1)],S=l(m+1)-l(m-1),C=-(y-v)/S,w=(x-b)/2,T=Math.hypot(C,1,w);o.setXYZ(h,C/T,1/T,w/T),t.color(g,f,this.tmpColor,p);for(let e of n){let t=e.stain(g,f);t>0&&this.tmpColor.lerp(this.stain.setHex(e.stainColor),t*.85)}s.setXYZ(h,this.tmpColor.r,this.tmpColor.g,this.tmpColor.b),c.setXY(h,g/5,(f-u)/5)}}a.needsUpdate=o.needsUpdate=s.needsUpdate=c.needsUpdate=!0,this.geometry.computeBoundingSphere(),this.mesh.position.set(0,0,-e),this.mesh.updateMatrix()}},Ih=new Set([`cottonPlant`,`grassTuft`,`dryGrass`,`reeds`,`fern`,`lilyPads`]),Lh=class{index;ground;layout;decor=[];features=[];owned=[];constructor(e,t){this.index=e,this.ground=t}get d0(){return this.layout.d0}get d1(){return this.layout.d1}},Rh=class{scene;generator;terrain;maps;decor;features;chunks=new Map;groundPool=[];onPopulate=null;density=1;builtThisRun=0;constructor(e,t,n,r,i,a){this.scene=e,this.generator=t,this.terrain=n,this.maps=r,this.decor=i,this.features=a}reset(){for(let e of[...this.chunks.values()])this.release(e);this.chunks.clear(),this.builtThisRun=0}update(e,t=1){let n=vd.chunkLength,r=Math.floor(e/n),i=r-vd.chunksBehind,a=r+vd.chunksAhead;for(let[e,t]of this.chunks)(e<i||e>a)&&this.release(t);for(let e=r;e<=a&&t>0;e++)this.chunks.has(e)||(this.build(e),t--);for(let e=r-1;e>=i&&t>0;e--)this.chunks.has(e)||(this.build(e),t--)}fill(e){this.update(e,1e3)}chunkAt(e){return this.chunks.get(Math.floor(e/vd.chunkLength))}groundHeight(e,t){let n=this.terrain.baseHeight(e,t),r=this.chunkAt(t);if(r)for(let i of r.layout.deformations)n+=i.height(e,t,!0);return n}build(e){let t=this.generator.generate(e),n=this.groundPool.pop()??new Fh,r=new Lh(e,n);r.layout=t,n.build(t.d0,this.terrain,t.deformations),this.scene.add(n.mesh),this.chunks.set(e,r),this.onPopulate?.(r),this.decorateChunk(r),this.builtThisRun++}release(e){this.scene.remove(e.ground.mesh),this.groundPool.push(e.ground);for(let t of e.decor)this.decor.release(t);for(let t of e.features)this.features.release(t);for(let t of e.owned)t.release();e.decor.length=e.features.length=e.owned.length=0,this.chunks.delete(e.index)}decorateChunk(e){let{d0:t,d1:n}=e.layout,r=new Set;for(let e of[t,(t+n)/2,n]){let t=this.terrain.blendAt(e);t.t<1&&r.add(t.a),t.t>0&&r.add(t.b)}let i=0;for(let t of r){let n=this.generator.chunkRandom(e.index,24301+i++*7919+t.id.length);t.decorate(this.makeContext(e,t,n))}}makeContext(e,t,n){let r=ud.corridorHalfWidth,i=e.layout.obstacles,a=(e.layout.d0+e.layout.d1)/2;return{chunkIndex:e.index,d0:e.layout.d0,d1:e.layout.d1,rng:n,noise:this.terrain.noise,corridor:r,mapStart:this.maps.startOf(t.id,a),level:this.maps.levelAt(a),weight:e=>this.maps.weightOf(t.id,e),groundHeight:(e,t)=>this.groundHeight(e,t),isClear:(e,t,n,r=0)=>{for(let a of i)if(!(Math.abs(e-a.x)>=a.width/2+n)&&t<a.d+a.depth/2+n&&t>a.d-a.depth/2-n-r)return!1;return!0},place:(t,r,i,a={})=>{if(this.density<1&&Ih.has(t)&&n.next()>this.density)return;let o=this.groundHeight(r,i)+(a.y??0),s=this.decor.place(t,r,o,-i,a.rotY??n.range(0,Math.PI*2),a.scale??1,a.scaleY??1,a.tilt??0,a.tint??16777215);s&&e.decor.push(s)},feature:(t,r,i,a={})=>{let o=this.features.spawn(t,r,this.groundHeight(r,i),i,a,n);e.features.push(o)}}}},zh=(e,t,n)=>new U(e,t,n);function Bh(e,t,n){let r=[];for(let i of t){let t=e.range(n[0],n[1]),a=t*e.range(.35,.55);for(let n=0;n<2;n++){let o=new Oo(a,t).translate(0,-t/2,0);o.rotateY(e.range(0,Math.PI)+n*Math.PI*.5),o.translate(i.x+e.range(-.3,.3),i.y,i.z+e.range(-.3,.3)),r.push(Q(o,16777215))}}return gm(r)}function Vh(e){let t=new Xf(e?1201:1101),n=km(),r=[],i=[],a=[],o=zh(0,3.2,0);r.push(Q(vm(zh(0,-.4,0),o,.75,.55,9),7035464));for(let e=0;e<6;e++){let n=e/6*Math.PI*2+t.range(-.3,.3),s=t.range(4.5,7.5),c=zh(Math.cos(n)*s*.5,o.y+t.range(1.2,2.4),Math.sin(n)*s*.5),l=zh(Math.cos(n)*s,o.y+t.range(2.2,4.8),Math.sin(n)*s);r.push(Q(vm(o,c,.42,.28,6),6706751)),r.push(Q(vm(c,l,.28,.12,5),6706751)),i.push(ym(t,l.clone().add(zh(0,.8,0)),zh(3,1.7,3),16,3,7309898)),i.push(ym(t,c.clone().add(zh(0,1.6,0)),zh(2.4,1.4,2.4),9,2.6,6257216)),a.push(c.clone(),l.clone().lerp(c,.3))}i.push(ym(t,zh(0,o.y+4.6,0),zh(3.6,1.8,3.6),18,3.2,7704653));let s=[{geometry:gm(r),material:n.bark,castShadow:!0},{geometry:gm(i),material:n.leaves,castShadow:!0}];return e&&s.push({geometry:Bh(t,a,[1.8,3.4]),material:n.moss}),s}function Hh(){let e=new Xf(2201),t=km(),n=[];for(let e=0;e<=12;e++){let t=e/12,r=t*15-.6,i=.32+1.05*(1-Math.min(1,t*3.2))**2.2;n.push(new H(i*(1-t*.55),r))}let r=[Q(new Eo(n,9),7233874)],i=[],a=[];for(let t=0;t<6;t++){let t=e.range(0,Math.PI*2),n=e.range(9,14),o=e.range(1.8,3.6),s=zh(Math.cos(t)*o,n+e.range(.4,1.4),Math.sin(t)*o);r.push(Q(vm(zh(0,n,0),s,.16,.07,5),7233874)),i.push(ym(e,s,zh(2.2,.8,2.2),8,2.2,5991996)),a.push(s.clone().lerp(zh(0,n,0),.4),s.clone())}i.push(ym(e,zh(0,15,0),zh(2.6,1.1,2.6),12,2.6,6386756));for(let t=0;t<5;t++){let t=e.range(0,Math.PI*2),n=e.range(1.2,2.6),i=e.range(.25,.7);r.push(Q(new ea(.13,i,5).translate(Math.cos(t)*n,i/2-.15,Math.sin(t)*n),6181444))}return[{geometry:gm(r),material:t.bark,castShadow:!0},{geometry:gm(i),material:t.leaves,castShadow:!0},{geometry:Bh(e,a,[2.2,4.2]),material:t.moss}]}function Uh(){let e=new Xf(3301),t=km(),n=[Q(vm(zh(0,-.3,0),zh(0,16,0),.38,.14,7),8018498)],r=[];for(let t=0;t<7;t++){let t=e.range(0,Math.PI*2),i=e.range(11,16),a=zh(Math.cos(t)*e.range(1.2,2.6),i+.6,Math.sin(t)*e.range(1.2,2.6));n.push(Q(vm(zh(0,i,0),a,.1,.05,4),6967098)),r.push(ym(e,a,zh(1.5,1,1.5),7,1.9,5400634))}return[{geometry:gm(n),material:t.bark,castShadow:!0},{geometry:gm(r),material:t.leaves,castShadow:!0}]}function Wh(){let e=new Xf(4401),t=km(),n=[Q(vm(zh(0,-.3,0),zh(.3,9,.1),.42,.12,7),4866104)];for(let t=0;t<6;t++){let t=e.range(3.5,8),r=e.range(0,Math.PI*2),i=e.range(1.4,3.4),a=zh(t/9*.3,t,t/9*.1),o=a.clone().add(zh(Math.cos(r)*i,e.range(.6,2),Math.sin(r)*i));n.push(Q(vm(a,o,.12,.03,4),4602932))}return[{geometry:gm(n),material:t.bark,castShadow:!0}]}function Gh(){let e=new Xf(5501);return[{geometry:gm([ym(e,zh(0,.7,0),zh(1.2,.75,1.2),10,1.4,6058560),ym(e,zh(.6,.5,.3),zh(.8,.5,.8),6,1.1,6650437)]),material:km().leaves}]}function Kh(){return[{geometry:bm(1.4,.9,3,new Xf(5601),6126141),material:km().grass}]}function qh(e){let t=new Xf(e?6602:6601);return[{geometry:bm(1.1,e?.75:.6,3,t,e?10257752:6976580),material:km().grass}]}function Jh(){return[{geometry:bm(1.6,1.8,3,new Xf(6701),9083482),material:km().reeds}]}function Yh(){let e=new Xf(7701),t=km(),n=[];for(let t=0;t<8;t++){let t=new Do(e.range(.045,.07),0);t.translate(e.range(-.3,.3),e.range(.7,1.95),e.range(-.3,.3)),n.push(Q(t,16777215))}return[{geometry:bm(1.1,2,3,e),material:t.cotton},{geometry:gm(n),material:t.cottonBoll}]}function Xh(){let e=new Xf(7801),t=[];for(let n=0;n<9;n++){let n=new Qi(e.range(.18,.38),8,.3,Math.PI*2-.5).rotateX(-Math.PI/2);n.translate(e.range(-1.6,1.6),.01,e.range(-1.6,1.6)),t.push(Q(n,e.chance(.2)?8030784:5204530))}return[{geometry:gm(t),material:km().painted}]}function Zh(){return[{geometry:xm(new Xf(8801),.9,8222315),material:km().stone,castShadow:!0}]}function Qh(){let e=new $i(.42,.55,.7,9).translate(0,.3,0),t=new Qi(.42,9).rotateX(-Math.PI/2).translate(0,.651,0);return[{geometry:gm([Q(e,7034952),Q(t,10848872)]),material:km().bark,castShadow:!0}]}function $h(){return[{geometry:Q(new $i(.38,.45,6,9).rotateZ(Math.PI/2).translate(0,.36,0),6115396),material:km().bark,castShadow:!0}]}var eg=(e,t,n)=>new U(e,t,n);function tg(e,t,n,r,i=.4){let a=new La;a.moveTo(-e/2-i,0),a.lineTo(e/2+i,0),a.lineTo(0,n),a.closePath();let o=new So(a,{depth:t+i*2,bevelEnabled:!1});return o.translate(0,r,-t/2-i),o}function ng(){let e=km(),t=15262420,n=[];n.push(Q(_m(24,9.5,14),t)),n.push(Q(_m(25,.6,15,0,9.5),14077887));let r=new ea(17,5,4,1).rotateY(Math.PI/4).scale(1,1,.62).translate(0,12.6,0);n.push(Q(r,4868164)),n.push(Q(_m(1.2,4,1.2,-8,11),9062966),Q(_m(1.2,4,1.2,8,11),9062966)),n.push(Q(_m(18,.7,4.5,0,0,9.2),13617336)),n.push(Q(_m(18,.9,4.6,0,9.3,9.2),t));for(let e=0;e<8;e++){let t=-8+e/7*16;n.push(Q(new $i(.35,.42,8.6,10).translate(t,5,11),15920868))}for(let e=0;e<2;e++)for(let t=0;t<6;t++){let r=-10+t*4;if(Math.abs(r)<2)continue;let i=1.6+e*4.2;n.push(Q(_m(1.3,2.2,.1,r,i,7.02),1907738)),n.push(Q(_m(.5,2.3,.08,r-.95,i-.05,7.05),2898732)),n.push(Q(_m(.5,2.3,.08,r+.95,i-.05,7.05),2898732))}return n.push(Q(_m(1.8,3,.1,0,.7,7.02),2759956)),[{geometry:gm(n),material:e.painted,castShadow:!0}]}function rg(){let e=km(),t=Q(_m(5.5,2.5,4.2),9270360),n=Q(tg(5.5,4.2,1.7,2.5).rotateY(Math.PI/2),6114620),r=Q(_m(.9,1.8,.06,.6,0,2.12),2760728),i=Q(_m(.9,4.6,.9,-2.9,0),8023392);return[{geometry:gm([t,n,r]),material:e.wood,castShadow:!0},{geometry:i,material:e.stone,castShadow:!0}]}function ig(){let e=km();return[{geometry:gm([Q(_m(10,5,14),7226934),Q(tg(10,14,3.4,5,.6),4995632),Q(_m(3.6,3.8,.08,0,0,7.02),3877408)]),material:e.wood,castShadow:!0}]}function ag(){let e=new Xf(9101),t=[];for(let n=0;n<4;n++){let r=-6+n*3,i=n%2==0?-.35:.35,a=-i;for(let n=0;n<4;n++){let o=.25+n*.28;t.push(Q(vm(eg(r-.25,o,i),eg(r+3+.25,o+.05,a),.06,.055,5),8218192,.1,e))}}return[{geometry:gm(t),material:km().wood,castShadow:!0}]}function og(){let e=[];for(let t=0;t<=10;t++){let n=t/10;e.push(new H(Math.sin(Math.min(1,(1-n)*1.35)*Math.PI*.5)*2.1+.05,n*3.6))}let t=new Eo(e,12),n=new $i(.06,.06,1.4,5).translate(0,4,0);return[{geometry:gm([Q(t,13215588,.08,new Xf(5)),Q(n,5916212)]),material:km().hay,castShadow:!0}]}function sg(){return[{geometry:Q(tg(2.6,3.2,2.2,0,0).rotateY(Math.PI/2),14209212),material:km().cloth,castShadow:!0}]}function cg(e,t){let n=[Q(new Ao(e,.06,5,16),t)];for(let r=0;r<6;r++){let i=r/6*Math.PI*2;n.push(Q(vm(eg(0,0,0),eg(Math.cos(i)*e,Math.sin(i)*e,0),.03,.03,4),t))}return n.push(Q(new $i(.12,.12,.25,8).rotateX(Math.PI/2),t)),gm(n)}function lg(){let e=km(),t=new $i(.16,.24,2,10).rotateX(Math.PI/2-.08).translate(0,1.15,-.4),n=_m(.35,.3,2.6,0,.35,.9).rotateX(-.25),r=[cg(.7,4864812).translate(-.75,.7,-.2),cg(.7,4864812).translate(.75,.7,-.2)],i=vm(eg(-.75,.7,-.2),eg(.75,.7,-.2),.06,.06,5);return[{geometry:Q(t,3949620),material:e.iron,castShadow:!0},{geometry:gm([Q(n,5917240),...r.map(e=>e),Q(i,3813416)]),material:e.wood,castShadow:!0}]}function ug(){return[{geometry:Q(new $i(.55,.55,1.1,10,1).translate(0,.55,0),8021064),material:km().wood,castShadow:!0}]}function dg(){return[{geometry:cg(.75,5916726).rotateX(Math.PI/2-.15).translate(0,.12,0),material:km().wood,castShadow:!0}]}function fg(){let e=new Xf(9601),t=[];for(let[n,,r]of[[-4,0,-3],[4,0,-3],[-4,0,3],[4,0,3],[0,0,3],[-4,0,0]]){let i=e.range(1.2,4.2);t.push(Q(_m(.25,i,.25,n,0,r).rotateZ(e.range(-.15,.15)),1906708))}t.push(Q(_m(8.4,e.range(.6,1.4),.2,0,0,-3),2366486)),t.push(Q(_m(.2,2.2,3.5,4,0,-1.2).rotateX(.1),2234900));for(let n=0;n<6;n++){let n=_m(.2,.2,e.range(2.5,5),e.range(-3,3),.1,e.range(-2,2));n.rotateY(e.range(0,Math.PI)),t.push(Q(n,1446415))}let n=Q(_m(1.4,7.5,1.4,-4.6,0,0),7297612);return[{geometry:gm(t),material:km().wood,castShadow:!0},{geometry:n,material:km().stone,castShadow:!0}]}var pg={cottonPlant:{build:Yh,capacity:17e3,receiveShadow:!0,noShadow:!0},grassTuft:{build:()=>qh(!1),capacity:7e3,noShadow:!0},dryGrass:{build:()=>qh(!0),capacity:7e3,noShadow:!0},shrub:{build:Gh,capacity:1400,receiveShadow:!0},oak:{build:()=>Vh(!1),capacity:260},oakMoss:{build:()=>Vh(!0),capacity:380},pine:{build:Uh,capacity:360},cypress:{build:Hh,capacity:620},deadTree:{build:Wh,capacity:420},stump:{build:Qh,capacity:420,receiveShadow:!0},reeds:{build:Jh,capacity:2600,noShadow:!0},lilyPads:{build:Xh,capacity:700,noShadow:!0},fern:{build:Kh,capacity:2400,noShadow:!0},rock:{build:Zh,capacity:700,receiveShadow:!0},log:{build:$h,capacity:260,receiveShadow:!0},railFence:{build:ag,capacity:420,receiveShadow:!0},cabin:{build:rg,capacity:70,receiveShadow:!0},plantationHouse:{build:ng,capacity:6,receiveShadow:!0},barn:{build:ig,capacity:20,receiveShadow:!0},haystack:{build:og,capacity:90,receiveShadow:!0},tent:{build:sg,capacity:160,receiveShadow:!0},cannon:{build:lg,capacity:80,receiveShadow:!0},gabion:{build:ug,capacity:360,receiveShadow:!0},wheel:{build:dg,capacity:120,receiveShadow:!0},burntHouse:{build:fg,capacity:16,receiveShadow:!0}},mg=new G().makeScale(0,0,0),hg=class{kind;capacity;meshes=[];free=[];highWater=0;dirty=!1;colorDirty=!1;constructor(e,t,n,r){this.kind=e,this.capacity=n;for(let i of t){let t=new Di(i.geometry,i.material,n);t.name=`decor:${e}`,t.frustumCulled=!1,t.castShadow=!r.noShadow&&!!i.castShadow,t.receiveShadow=!!r.receiveShadow,t.count=0,t.instanceMatrix.setUsage(Ue),t.setColorAt(0,new K(1,1,1)),this.meshes.push(t)}for(let e=n-1;e>=0;e--)this.free.push(e)}alloc(e,t){let n=this.free.pop();if(n===void 0)return-1;for(let r of this.meshes)r.setMatrixAt(n,e),r.setColorAt(n,t);if(n+1>this.highWater){this.highWater=n+1;for(let e of this.meshes)e.count=this.highWater}return this.dirty=this.colorDirty=!0,n}release(e){for(let t of this.meshes)t.setMatrixAt(e,mg);this.free.push(e),this.dirty=!0}get used(){return this.capacity-this.free.length}flush(){if(this.dirty)for(let e of this.meshes)e.instanceMatrix.needsUpdate=!0;if(this.colorDirty)for(let e of this.meshes)e.instanceColor&&(e.instanceColor.needsUpdate=!0);this.dirty=this.colorDirty=!1}},gg=class{pools=new Map;group=new Tn;tmpMatrix=new G;tmpQuat=new Ot;tmpEuler=new sn;tmpPos=new U;tmpScale=new U;tmpColor=new K;constructor(e){this.group.name=`decorations`,e.add(this.group)}warmUp(){for(let e of Object.keys(pg))this.pool(e)}pool(e){let t=this.pools.get(e);if(!t){let n=pg[e];t=new hg(e,n.build(),n.capacity,n);for(let e of t.meshes)this.group.add(e);this.pools.set(e,t)}return t}place(e,t,n,r,i,a,o,s,c){let l=this.pool(e);this.tmpEuler.set(s,i,s*.6,`YXZ`),this.tmpQuat.setFromEuler(this.tmpEuler),this.tmpMatrix.compose(this.tmpPos.set(t,n,r),this.tmpQuat,this.tmpScale.set(a,a*o,a)),this.tmpColor.setHex(c);let u=l.alloc(this.tmpMatrix,this.tmpColor);return u<0?null:{pool:l,index:u}}release(e){e.pool.release(e.index)}flush(){for(let e of this.pools.values())e.flush()}stats(){return[...this.pools.values()].map(e=>({kind:e.kind,used:e.used,capacity:e.capacity}))}},_g=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
    gl_Position.z = gl_Position.w; // pin to the far plane
  }
`,vg=`
  uniform vec3 zenith;
  uniform vec3 horizon;
  uniform vec3 sunColor;
  uniform vec3 sunGlow;
  uniform vec3 sunDir;
  uniform vec3 cloudColor;
  uniform float clouds;
  uniform float time;
  uniform vec3 fogColor;
  varying vec3 vDir;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0; float a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    // Sky gradient: horizon band blends up to the zenith.
    float t = pow(clamp(h, 0.0, 1.0), 0.45);
    vec3 col = mix(horizon, zenith, t);
    // Below the horizon: fade into fog colour (hidden by terrain mostly).
    col = mix(col, fogColor, smoothstep(0.02, -0.12, h));

    // Sun disc and glow.
    float sd = max(dot(dir, sunDir), 0.0);
    col += sunGlow * pow(sd, 6.0) * 0.55;
    col += sunGlow * pow(sd, 48.0) * 0.6;
    col += sunColor * smoothstep(0.9993, 0.9997, sd) * 6.0;

    // Clouds on a virtual plane.
    if (h > 0.0 && clouds > 0.0) {
      vec2 uv = dir.xz / (h + 0.12) * 1.4 + vec2(time * 0.006, time * 0.003);
      float n = fbm(uv);
      float cover = smoothstep(1.0 - clouds, 1.0 - clouds + 0.35, n);
      float lit = pow(sd, 3.0);
      vec3 cc = mix(cloudColor, cloudColor * 1.3 + sunGlow * 0.4, lit);
      float fade = smoothstep(0.0, 0.18, h);
      col = mix(col, cc, cover * 0.85 * fade);
    }
    // Horizon haze toward the fog colour.
    col = mix(col, fogColor, (1.0 - smoothstep(0.0, 0.22, h)) * 0.6);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,yg=class{mesh;uniforms={zenith:{value:new K},horizon:{value:new K},sunColor:{value:new K},sunGlow:{value:new K},sunDir:{value:new U(0,1,0)},cloudColor:{value:new K},clouds:{value:.3},time:{value:0},fogColor:{value:new K}};constructor(){let e=new zo({vertexShader:_g,fragmentShader:vg,uniforms:this.uniforms,side:1,depthWrite:!1,fog:!1});this.mesh=new J(new ko(900,32,16),e),this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1,this.mesh.name=`sky`}},bg=2,xg=2,Sg=[`skyZenith`,`skyHorizon`,`cloudColor`,`sunGlow`,`sunColor`,`hemiSky`,`hemiGround`,`fogColor`,`dustColor`,`mistColor`,`waterColor`,`horizonColor`],Cg=[`clouds`,`sunIntensity`,`sunElevation`,`sunAzimuth`,`hemiIntensity`,`fogDensity`,`exposure`,`bloom`,`dust`,`mist`,`smoke`,`waterLevel`,`horizonTrees`],wg=class{scene;renderer;sky=new yg;sun;hemi;fog;water;horizon;current;variation={sunAzimuthOffset:0,sunElevationOffset:0,fogMultiplier:1,warmth:0,windStrength:1};lantern=0;colors=new Map;ca=new K;cb=new K;sunDir=new U;pmrem;envScene=new Pn;envTarget=null;envTimer=0;lastEnvKey=``;time=0;constructor(t,n){this.scene=t,this.renderer=n,this.current={grade:{gain:[1,1,1],lift:[0,0,0],saturation:1,contrast:1,vignette:.3}};for(let e of Sg)this.colors.set(e,new K);t.add(this.sky.mesh),this.sun=new Ts(16777215,3),this.sun.castShadow=!0,this.sun.shadow.camera.left=-38,this.sun.shadow.camera.right=38,this.sun.shadow.camera.top=38,this.sun.shadow.camera.bottom=-38,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=320,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,t.add(this.sun,this.sun.target),this.hemi=new us(16777215,4473924,1),t.add(this.hemi),this.fog=new Nn(13421772,.005),t.fog=this.fog,this.water=new J(new Oo(440,520).rotateX(-Math.PI/2),km().water),this.water.name=`water`,this.water.receiveShadow=!0,this.water.renderOrder=1,t.add(this.water);let r=np.treeline().clone();r.wrapS=e,r.repeat.set(16,1),r.needsUpdate=!0,this.horizon=new J(new $i(720,720,34,48,1,!0).translate(0,13,0),new ii({map:r,transparent:!0,alphaTest:.35,side:1,fog:!1,depthWrite:!1})),this.horizon.renderOrder=-9,this.horizon.frustumCulled=!1,t.add(this.horizon),this.pmrem=new gc(n);let i=new yg;i.mesh.material=this.sky.mesh.material,this.envScene.add(i.mesh)}randomizeWeather(e){this.variation={sunAzimuthOffset:e.range(-35,35),sunElevationOffset:e.range(-3,5),fogMultiplier:e.range(.8,1.3),warmth:e.range(-.6,1),windStrength:e.range(.6,1.5)}}setShadowQuality(e){this.sun.castShadow=e>0,e>0&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}blend(e){let t=e.a.atmosphere,n=e.b.atmosphere,r=e.t,i=this.current;for(let e of Cg)i[e]=Sd(t[e],n[e],r);for(let e of Sg){let a=this.colors.get(e);a.setHex(t[e]).lerp(this.cb.setHex(n[e]),r),i[e]=a.getHex()}let a=this.current.grade;for(let e=0;e<3;e++)a.gain[e]=Sd(t.grade.gain[e],n.grade.gain[e],r),a.lift[e]=Sd(t.grade.lift[e],n.grade.lift[e],r);a.saturation=Sd(t.grade.saturation,n.grade.saturation,r),a.contrast=Sd(t.grade.contrast,n.grade.contrast,r),a.vignette=Sd(t.grade.vignette,n.grade.vignette,r)}color(e){return this.colors.get(e)}applyWeather(e){let t=this.current,n=e.state;t.clouds=Math.min(.97,Math.max(0,t.clouds+n.clouds)),t.sunIntensity*=n.sun,t.hemiIntensity*=n.hemi,t.fogDensity*=n.fog,t.dust*=n.dust,t.mist=Math.min(1,t.mist+n.mist),t.exposure*=n.exposure,t.grade.saturation*=n.saturation,t.bloom*=.6+.4*n.sun;let r=this.cb.setHex(dh.gloomColor);if(this.color(`cloudColor`).lerp(r,n.gloom*.8),this.color(`skyZenith`).lerp(r,n.gloom*.65),this.color(`skyHorizon`).lerp(r,n.gloom*.5),this.color(`fogColor`).lerp(r,n.gloom*.35),this.color(`sunGlow`).multiplyScalar(.25+.75*n.sun),e.flash>0){t.hemiIntensity+=e.flash*2.5,t.exposure+=e.flash*.35;for(let t of[`skyZenith`,`skyHorizon`,`cloudColor`])this.color(t).lerp(this.ca.setRGB(.85,.88,1),e.flash*.6)}let i=km().ground;i.roughness=Sd(.96,.62,n.wet),i.color.setScalar(1-.28*n.wet)}update(e,t,n,r,i,a=null){this.time+=e,this.blend(t),a&&this.applyWeather(a);let o=this.current,s=this.variation,c=a?a.state.wind:1,l=Dt.degToRad(Math.max(2,o.sunElevation+s.sunElevationOffset)),u=Dt.degToRad(o.sunAzimuth+s.sunAzimuthOffset);this.sunDir.set(Math.sin(u)*Math.cos(l),Math.sin(l),-Math.cos(u)*Math.cos(l)).normalize();let d=this.ca.setRGB(1+.08*s.warmth,1,1-.12*s.warmth);this.sun.color.copy(this.color(`sunColor`)).multiply(d),this.sun.intensity=o.sunIntensity*bg;let f=r,p=i-18;this.sun.target.position.set(f,0,p),this.sun.position.set(f+this.sunDir.x*150,this.sunDir.y*150,p+this.sunDir.z*150),this.sun.target.updateMatrixWorld(),this.hemi.color.copy(this.color(`hemiSky`)),this.hemi.groundColor.copy(this.color(`hemiGround`)),this.hemi.intensity=o.hemiIntensity*xg,this.fog.color.copy(this.color(`fogColor`)),this.fog.density=o.fogDensity*s.fogMultiplier*(1-this.lantern*.45);let m=this.sky.uniforms;m.zenith.value.copy(this.color(`skyZenith`)),m.horizon.value.copy(this.color(`skyHorizon`)),m.sunColor.value.copy(this.color(`sunColor`)).multiplyScalar(a?a.state.sun**2:1),m.sunGlow.value.copy(this.color(`sunGlow`)),m.sunDir.value.copy(this.sunDir),m.cloudColor.value.copy(this.color(`cloudColor`)),m.clouds.value=o.clouds,m.time.value=this.time,m.fogColor.value.copy(this.color(`fogColor`)),this.sky.mesh.position.copy(n.position);let h=this.horizon.material;h.color.copy(this.color(`horizonColor`)).lerp(this.color(`fogColor`),.55),h.opacity=o.horizonTrees,this.horizon.visible=o.horizonTrees>.02,this.horizon.position.set(n.position.x,-6,n.position.z),this.water.visible=o.waterLevel>-3,this.water.position.set(0,o.waterLevel,i-220);let g=this.water.material;g.color.copy(this.color(`waterColor`)),g.normalMap&&g.normalMap.offset.set(this.time*.004,this.time*.007-i/520*80),Tm.uTime.value=this.time,Tm.uWindStrength.value=s.windStrength*c*(.7+o.smoke*.3),this.renderer.toneMappingExposure=o.exposure*(1+this.lantern*.12),this.updateEnvMap(e)}updateEnvMap(e){if(this.envTimer-=e,this.envTimer>0)return;this.envTimer=1.5;let t=`${this.color(`skyHorizon`).getHexString()}${this.color(`skyZenith`).getHexString()}${this.color(`fogColor`).getHexString()}`;t!==this.lastEnvKey&&(this.lastEnvKey=t,this.envTarget?.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,0,1,1e3),km().water.envMap=this.envTarget.texture,km().water.needsUpdate=!0)}get sunDirection(){return this.sunDir}},Tg=class{object=new Tn;x=0;y=0;d=0;setup(e,t,n,r,i){this.x=e,this.y=t,this.d=n,this.object.position.set(e,t,-n),this.configure(r,i)}dispose(e){}distanceTo(e){return Math.hypot(this.x-e.playerX,this.d-e.playerD)}panFor(e){let t=this.x-e.playerX;return Math.max(-1,Math.min(1,t/(Math.abs(this.d-e.playerD)+Math.abs(t)+1)))}},Eg=(()=>{let e=new Dr,t=new Float32Array([-.45,.05,0,0,0,-.08,0,0,.12,.45,.05,0,0,0,-.08,0,0,.12]);return e.setAttribute(`position`,new pr(t,3)),e.computeVertexNormals(),e})(),Dg=new ii({color:1380879,side:2}),Og=class extends Tg{birds=[];params=[];configure(e,t){let n=e.count??7,r=e.radius??18,i=e.height??22;for(;this.birds.length<n;){let e=new J(Eg,Dg);this.birds.push(e),this.object.add(e)}this.params=[];for(let e=0;e<this.birds.length;e++)this.birds[e].visible=e<n,this.params.push({r:r*t.range(.5,1.2),speed:t.range(.25,.45)*t.sign(),phase:t.range(0,Math.PI*2),h:i+t.range(-4,4)})}update(e){if(!(this.distanceTo(e)>350))for(let t=0;t<this.birds.length;t++){let n=this.birds[t];if(!n.visible)continue;let r=this.params[t],i=e.time*r.speed+r.phase;n.position.set(Math.cos(i)*r.r,r.h+Math.sin(i*2.3)*1.5,Math.sin(i)*r.r),n.rotation.set(0,-i+(r.speed>0?Math.PI:0),Math.sin(i*1.7)*.3),n.scale.set(1.4,1+Math.sin(e.time*9+r.phase)*1.4,1.4)}}},kg=class extends Tg{glow;lamp;flicker=Math.random()*10;constructor(){super(),this.lamp=new J(new $i(.12,.14,.32,6),new Vo({color:2761242,emissive:16752704,emissiveIntensity:2.2,roughness:.6})),this.glow=new Zr(new Lr({map:np.glow(),color:16756832,transparent:!0,blending:2,depthWrite:!1})),this.glow.scale.setScalar(2.6),this.object.add(this.lamp,this.glow)}configure(e){let t=e.height??3;this.lamp.position.y=t,this.glow.position.y=t}update(e){this.flicker+=e.dt;let t=.8+Math.sin(this.flicker*13)*.08+Math.sin(this.flicker*7.3)*.1;this.glow.material.opacity=t,this.lamp.rotation.z=Math.sin(this.flicker*1.3)*.08}},Ag=null,jg=class extends Tg{guns=[];facing=1;interval=7;timer=0;next=0;recoil=[];configure(e,t){Ag??=lg();let n=e.count??3;for(this.facing=e.facing??1,this.interval=e.interval??6;this.guns.length<n;){let e=new Tn;for(let t of Ag){let n=new J(t.geometry,t.material);n.castShadow=!0,e.add(n)}this.guns.push(e),this.object.add(e)}this.recoil=[];for(let e=0;e<this.guns.length;e++){let t=this.guns[e];t.visible=e<n,t.position.set(0,0,(e-(n-1)/2)*7),t.rotation.y=this.facing>0?-Math.PI/2:Math.PI/2,this.recoil.push(0)}this.timer=t.range(0,this.interval),this.next=0}update(e){let t=this.distanceTo(e);for(let t=0;t<this.guns.length;t++)this.recoil[t]>0&&(this.recoil[t]=Math.max(0,this.recoil[t]-e.dt*1.5),this.guns[t].position.x=-this.facing*Math.sin(this.recoil[t]*Math.PI)*.6);if(t>500||(this.timer+=e.dt,this.timer<this.interval/Math.max(1,this.guns.filter(e=>e.visible).length)))return;this.timer=0;let n=this.guns.filter(e=>e.visible),r=n[this.next++%n.length],i=this.guns.indexOf(r);this.recoil[i]=1;let a=this.x+this.facing*1.6;e.particles.muzzle(a,this.y+1.2,-(this.d-r.position.z),this.facing,0,!0),e.bus.emit(`battle:cannon`,{distance:t,pan:this.panFor(e)})}},Mg=class extends Tg{radius=1;intensity=1;configure(e){this.radius=e.radius??1,this.intensity=e.intensity??1}update(e){let t=this.distanceTo(e);if(t>260)return;let n=t<80?1:t<160?.5:.25;e.particles.fire(this.x,this.y,-this.d,this.radius,e.dt,this.intensity*n)}},Ng=class extends Tg{cloth;pole;base;army=-1;constructor(){super();let e=new Oo(1.9,1.2,12,6);e.translate(.95,0,0),this.base=e.getAttribute(`position`).array.slice(),this.cloth=new J(e,new Vo({side:2,roughness:1})),this.cloth.castShadow=!0,this.pole=new J(new $i(.03,.04,1,5).translate(0,.5,0),km().painted),this.object.add(this.cloth,this.pole)}configure(e){let t=e.army??0,n=e.height??3.2;if(t!==this.army){let e=this.cloth.material;e.map=t===0?np.flagUnion():np.flagConfederate(),e.needsUpdate=!0,this.army=t,this.cloth.scale.set(t===0?1:.75,t===0?1:1.2,1)}this.pole.scale.set(1,n,1),this.cloth.position.set(0,n-.7,0)}update(e){if(this.distanceTo(e)>300)return;let t=this.cloth.geometry.getAttribute(`position`),n=t.array;for(let r=0;r<t.count;r++){let t=this.base[r*3],i=this.base[r*3+1],a=t*.18;n[r*3+2]=Math.sin(e.time*5-t*3+i*.6)*a,n[r*3+1]=i-t*.06+Math.sin(e.time*3.1-t*2)*a*.25}t.needsUpdate=!0,this.cloth.geometry.computeVertexNormals()}},Pg=class extends Tg{size=1;acc=0;configure(e){this.size=e.size??1,this.acc=0}update(e){if(!(this.distanceTo(e)>600))for(this.acc+=e.dt*3.5*this.size;this.acc>1;)--this.acc,e.particles.spawnSmoke({x:this.x+(Math.random()-.5)*4*this.size,y:this.y+2,z:-this.d+(Math.random()-.5)*4*this.size,vx:1.2+Math.random(),vy:2.5+Math.random()*1.5,vz:(Math.random()-.5)*.8,life:14+Math.random()*6,size:5*this.size,endSize:26*this.size,alpha:.6,color:3025446,drag:.05,fadeIn:.08})}},Fg=Lf(),Ig=new U,Lg=class extends Tg{soldiers=[];army=0;spawnSoldiers(e,t,n,r){for(let i=0;i<t;i++){let t=this.army===0?Kf.union(n.next()):Kf.confederate(n.next()),a=e.characters.humans.spawn(t);if(!a)break;let[o,s]=r(i);this.soldiers.push({h:a,ox:o,oz:s,phase:n.range(0,Math.PI*2),down:-1,variant:n.int(0,3),recoil:0,pace:n.range(.9,1.1),from:null})}}dispose(e){for(let t of this.soldiers)e.characters.humans.remove(t.h);this.soldiers=[]}inRange(e,t=210){let n=this.d-e.playerD;return n<-40?(this.soldiers.length&&this.dispose(e),!1):Math.hypot(this.x-e.playerX,n)<t}fall(e,t,n,r,i,a){e.from??=Vf(e.h.pose,Lf()),e.down+=t;let o=Math.min(1,e.down/.7);Hf.lying(Fg,e.variant),Fg.y=i-kf.hipHeight+Uf,e.from.y=i,Bf(e.from,Fg,o*o,e.h.pose),e.h.pose.x=r,e.h.pose.z=a,e.h.pose.yaw=n,o>=1&&(e.h.isStatic=!0)}},Rg=class extends Lg{facing=1;volley=2;casualtyTimer=4;needsSpawn=0;rng;configure(e,t){this.army=e.army??0,this.facing=e.facing??1,this.needsSpawn=Math.round(e.count??14),this.rng=t,this.volley=t.range(1,5),this.casualtyTimer=t.range(3,9)}update(e){if(!this.inRange(e))return;if(this.needsSpawn>0){let t=this.needsSpawn;this.needsSpawn=0,this.spawnSoldiers(e,t,this.rng,e=>[e%2*-this.facing*1.1,(Math.floor(e/2)-t/4)*1.15])}let t=this.distanceTo(e),n=this.facing>0?-Math.PI/2:Math.PI/2;for(let t of this.soldiers){let r=this.x+t.ox,i=this.d+t.oz,a=e.groundHeight(r,i)+kf.hipHeight;if(t.down>=0){t.h.isStatic||this.fall(t,e.dt,n,r,a,-i);continue}t.recoil=Math.max(0,t.recoil-e.dt*3),t.ox===0||Math.sin(e.time*.4+t.phase)>0?Hf.aim(t.h.pose,t.recoil):Hf.stand(t.h.pose,e.time+t.phase),t.h.pose.x=r,t.h.pose.y=a,t.h.pose.z=-i,t.h.pose.yaw=n}if(!(t>450)){if(this.volley-=e.dt,this.volley<=0){this.volley=3.5+Math.random()*5;let n=0;for(let t of this.soldiers)t.down>=0||Math.random()<.35||(t.recoil=1,e.characters.humans.muzzle(t.h,Ig),e.particles.muzzle(Ig.x,Ig.y,Ig.z,this.facing,0,!1),n++);n&&e.bus.emit(`battle:volley`,{distance:t,pan:this.panFor(e),count:n})}if(this.casualtyTimer-=e.dt,this.casualtyTimer<=0){this.casualtyTimer=2+Math.random()*6;let e=this.soldiers.filter(e=>e.down<0);e.length>3&&(e[Math.floor(Math.random()*e.length)].down=0)}}}},zg=class extends Lg{dir=1;speed=4.5;travel=0;needsSpawn=0;rng;configure(e,t){this.army=e.army??1,this.dir=e.dirX??1,this.speed=e.speed??4.5,this.needsSpawn=Math.round(e.count??18),this.travel=0,this.rng=t}update(e){if(!this.inRange(e,240))return;if(this.needsSpawn>0){let t=this.needsSpawn;this.needsSpawn=0;let n=this.rng;this.spawnSoldiers(e,t,n,()=>[n.range(-6,6),n.range(-12,12)])}if(this.distanceTo(e)>400)return;this.travel+=this.speed*e.dt;let t=this.dir>0?-Math.PI/2:Math.PI/2;for(let n of this.soldiers){let r=this.x+n.ox+this.dir*this.travel*n.pace,i=this.d+n.oz,a=e.groundHeight(r,i);if(n.down>=0){n.h.isStatic||this.fall(n,e.dt,t,r,a+kf.hipHeight,-i);continue}n.phase+=e.dt*(this.speed*n.pace*Math.PI/1.3);let o=Hf.run(n.h.pose,n.phase,.9,!0);n.h.pose.x=r,n.h.pose.y=a+kf.hipHeight+o,n.h.pose.z=-i,n.h.pose.yaw=t,Math.random()<e.dt*.05&&(n.down=0)}}},Bg=class extends Lg{rows=4;cols=8;dirZ=-1;marching=1;travel=0;needsSpawn=0;rng;configure(e,t){this.army=e.army??0,this.rows=e.rows??4,this.cols=e.cols??8,this.dirZ=e.dirZ??-1,this.marching=e.marching??1,this.needsSpawn=this.rows*this.cols,this.travel=0,this.rng=t}update(e){if(!this.inRange(e,260))return;if(this.needsSpawn>0){let t=this.needsSpawn;this.needsSpawn=0,this.spawnSoldiers(e,t,this.rng,e=>[e%this.cols*.9-this.cols*.45,Math.floor(e/this.cols)*1.2])}if(this.distanceTo(e)>600)return;let t=this.marching?1.4:0;this.travel+=t*e.dt;let n=this.dirZ<0?0:Math.PI;for(let r of this.soldiers){let i=this.x+r.ox,a=this.d+r.oz-this.dirZ*this.travel,o=e.time*t*Math.PI/.75,s=this.marching?Hf.run(r.h.pose,o,.35,!1):0;this.marching||Hf.stand(r.h.pose,e.time+r.phase),r.h.pose.rifle=`slung`,r.h.pose.x=i,r.h.pose.y=e.groundHeight(i,a)+kf.hipHeight+s,r.h.pose.z=-a,r.h.pose.yaw=n}}},Vg=class extends Lg{needsSpawn=0;spread=10;rng;configure(e,t){this.needsSpawn=Math.round(e.count??5),this.spread=e.spread??10,this.rng=t}update(e){if(!this.inRange(e,170)||this.needsSpawn<=0)return;let t=this.needsSpawn;this.needsSpawn=0;let n=this.rng;for(let r=0;r<t;r++){this.army=+!n.chance(.5);let t=this.army===0?Kf.union(n.next()):Kf.confederate(n.next()),r=e.characters.humans.spawn({...t,rifle:!1});if(!r)break;let i=this.x+n.range(-this.spread,this.spread),a=this.d+n.range(-this.spread,this.spread);Hf.lying(r.pose,n.int(0,3)),r.pose.x=i,r.pose.z=-a,r.pose.y=e.groundHeight(i,a)+Uf,r.pose.yaw=n.range(0,Math.PI*2),r.isStatic=!0,r.dirty=!0,this.soldiers.push({h:r,ox:0,oz:0,phase:0,down:1,variant:0,recoil:0,pace:1,from:null})}}},Hg=null;function Ug(){if(Hg)return Hg;let e=document.createElement(`canvas`);e.width=256,e.height=96;let t=e.getContext(`2d`);t.fillStyle=`#8a7356`,t.fillRect(0,0,256,96);for(let e=0;e<60;e++){t.strokeStyle=`rgba(60,40,25,${.1+Math.random()*.2})`,t.beginPath();let e=Math.random()*96;t.moveTo(0,e),t.lineTo(256,e+(Math.random()-.5)*6),t.stroke()}return t.fillStyle=`#1c1410`,t.font=`bold 60px Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`RUNNER`,128,52),Hg=new Ki(e),Hg.colorSpace=Re,Hg}var Wg=class extends Tg{body=null;seed=0;limb;rope;board;cords;yaw=0;constructor(){super();let e=km().bark,t=new $i(.11,.2,3.4,8).rotateZ(Math.PI/2-.15).translate(1.6,4.55,0);this.limb=new J(t,e),this.limb.castShadow=!0;let n=new Vo({color:9075290,roughness:1});this.rope=new J(new $i(.028,.028,1,6).translate(0,-.5,0),n),this.cords=new J(new Ao(.15,.007,4,12,Math.PI),n),this.board=new J(new Oo(.6,.23),new Vo({map:Ug(),roughness:1,side:2})),this.board.rotation.order=`YXZ`,this.object.add(this.limb,this.rope,this.board,this.cords)}configure(e,t){this.yaw=e.facing??0,this.object.rotation.y=this.yaw,this.seed=t.range(0,10)}dispose(e){e.characters.humans.remove(this.body),this.body=null}update(e){if(!this.body&&(this.body=e.characters.humans.spawn({...Kf.runner(this.seed/10),hat:`none`}),!this.body)||this.distanceTo(e)>220)return;this.object.updateMatrixWorld(!0);let t=new U(3,4.3,0).applyAxisAngle(new U(0,1,0),this.yaw),n=this.x+t.x,r=-this.d+t.z,i=this.y+t.y,a=e.time,o=Math.sin(a*.6+this.seed)*.04,s=i-1;Hf.hang(this.body.pose,a,this.seed);let c=this.body.pose;c.x=n+o,c.z=r,c.y=s-kf.spineOffset-kf.neckHeight,c.yaw=this.yaw-Math.PI/2+Math.sin(a*.25+this.seed)*.3;let l=(e,t,n)=>this.object.worldToLocal(new U(e,t,n)),u=l(n,i,r);this.rope.position.copy(u),this.rope.scale.set(1,i-s+.05,1),this.rope.rotation.set(0,0,-o*.8);let d=-Math.sin(c.yaw),f=-Math.cos(c.yaw),p=l(c.x+d*.17,s-.32,c.z+f*.17);this.board.position.copy(p),this.board.rotation.set(-.12,c.yaw-this.yaw+Math.PI,0),this.cords.position.copy(l(c.x+d*.1,s-.17,c.z+f*.1)),this.cords.rotation.set(0,c.yaw-this.yaw,0)}},Gg={firingLine:()=>new Rg,charge:()=>new zg,formation:()=>new Bg,corpses:()=>new Vg,hangingTree:()=>new Wg,cannonBattery:()=>new jg,fire:()=>new Mg,flag:()=>new Ng,smokeColumn:()=>new Pg,signalLantern:()=>new kg,birds:()=>new Og},Kg=class{characters;group=new Tn;pools=new Map;active=new Set;kinds=new Map;constructor(e,t){this.characters=t,this.group.name=`features`,e.add(this.group)}spawn(e,t,n,r,i,a){let o=this.pools.get(e)??[];this.pools.set(e,o);let s=o.pop()??Gg[e]();return this.kinds.set(s,e),s.setup(t,n,r,i,a),this.group.add(s.object),this.active.add(s),s}release(e){this.active.delete(e)&&(e.dispose({characters:this.characters}),this.group.remove(e.object),this.pools.get(this.kinds.get(e)).push(e))}update(e){for(let t of this.active)t.update(e)}get activeCount(){return this.active.size}},qg=[{map:`cotton`,length:2e3,title:`Level 1`},{map:`swamp`,length:2e3,title:`Level 2`},{map:`battlefield`,length:1/0,title:`Level 3`}],Jg=[90,50],Yg={cotton:{obstacles:{fence:20,barrel:11,wagon:8,hayBale:12,branch:13,rock:6,plow:5,ditch:6,open:30},density:1,collectibles:{lantern:.2},battleHazards:!1},swamp:{obstacles:{fallenTree:22,mudPit:12,water:10,roots:12,branch:10,rock:7,narrows:9,stream:7,stump:8,open:26},density:1.05,collectibles:{lantern:2.2,water:.7},battleHazards:!1},battlefield:{obstacles:{crater:18,trench:12,wire:12,barricade:14,brokenWagon:10,debris:14,fallenTree:6,burningDebris:7,mudPit:5,open:24},density:1.1,collectibles:{lantern:1,food:1.3},battleHazards:!0}},Xg=e=>Math.sin(e*.011)*4+Math.sin(e*.029+1.3)*1.8,Zg=new K(9199937),Qg=new K(7227952),$g=new K(11438690),e_=new K(8024384),t_=new K(14275523),n_=3.2,r_=e=>Math.round((e-100)/170)*170+100,i_=e=>Math.abs(e-r_(e))<n_;function a_(e){let t=e-r_(e);return t>-3.2?0:wd(-58,-48,t)}var o_=[[520,-1],[1380,1]];function s_(e){let t=r_(e);return t>=e?t:t+170}var c_=(e,t,n)=>wd(.62,.75,n.value(e*.025+40,t*.02)),l_={id:`cotton`,name:`The Cotton Fields`,caption:`Go now. Run for the tree line, and do not look back.`,tuning:Yg.cotton,atmosphere:{skyZenith:5997240,skyHorizon:16039808,clouds:.32,cloudColor:15127224,sunGlow:16755028,sunColor:16766624,sunIntensity:3.4,sunElevation:13,sunAzimuth:32,hemiSky:13616040,hemiGround:7031854,hemiIntensity:1.15,fogColor:15123347,fogDensity:.0042,exposure:.92,grade:{gain:[1.07,1,.88],lift:[.025,.012,-.01],saturation:.9,contrast:1.08,vignette:.38},bloom:.38,dust:.65,dustColor:16768160,mist:.04,mistColor:15982528,smoke:0,waterLevel:-20,waterColor:4409907,horizonColor:5133880,horizonTrees:.85},terrain:{height(e,t,n){let r=wd(12,34,Math.abs(e)),i=n.fbm(e*.007,t*.007,3)*7+n.fbm(e*.03,t*.03,2)*1.2;return n.value(e*.6,t*.6)*.05+r*(i+2.4)},color(e,t,n,r){let i=n.value(e*.08,t*.08);r.copy(Zg).lerp(Qg,i*.6);let a=Math.abs(e),o=wd(26,40,a)*(1-wd(110,170,a))*.55*(.6+.4*n.value(e*.02,t*.02));r.lerp(t_,o),r.lerp(e_,c_(e,t,n)*.8);let s=Math.abs(e-Xg(t));r.lerp($g,(1-wd(1,1.9,s))*.85);let c=Math.abs(t-r_(t));r.lerp($g,(1-wd(2,3.6,c))*.75*(1-wd(40,70,Math.abs(e))))},surface(e,t,n){return c_(e,t,n)>.5?`grass`:`dirt`}},ambience:{wind:.45,birds:.8,insects:.45,frogs:0,water:0,trees:.2,battle:0,fire:0,drone:.35,dronePitch:55},decorate(e){let{rng:t,d0:n,d1:r,noise:i,corridor:a}=e,o=null;for(let[i,s]of o_){let c=e.mapStart+i;c<n||c>=r||(o={side:s,x:s*(a+3.6),d:c},e.place(`oak`,o.x+s*.4,c,{scale:1,rotY:t.range(0,Math.PI*2)}),e.feature(`hangingTree`,o.x,c,{facing:(s>0?Math.PI:0)+t.range(-.1,.1)}),e.feature(`birds`,o.x,c,{count:6,radius:7,height:11}))}let s=(e,t)=>o!==null&&Math.sign(e)===o.side&&t>o.d-6&&t<o.d+6&&Math.abs(e)>a-1.5&&Math.abs(e)<Math.abs(o.x)+6,c=(e,t)=>o!==null&&Math.sign(e)===o.side&&t>o.d-45&&t<=o.d-6&&Math.abs(e)>a-3&&Math.abs(e)<Math.abs(o.x)+6;for(let o=-27;o<=27;o+=1.3)for(let l=n+t.range(0,.9);l<r;l+=t.range(.85,1.25)){let n=e.weight(l),r=o+t.range(-.12,.12);if(Math.abs(r-Xg(l))<1.5||i_(l)||s(r,l))continue;if(t.next()>n*n*(1-c_(r,l,i)*.9)){t.chance(.18*(1-n)+.05)&&e.place(`dryGrass`,r,l,{scale:t.range(.7,1.3)});continue}let u=Math.abs(r)<a+.5;if(u&&t.chance(.62)||!e.isClear(r,l,u?1.5:.5,u?7:0))continue;let d=Math.max(a_(l),+!!c(r,l));if(d>0&&t.chance(.35*d))continue;let f=t.range(.93,1.05)*(1-.64*d);e.place(`cottonPlant`,r,l,{scale:t.range(.92,1.08),scaleY:f,tilt:t.range(-.07,.07)})}for(let i=0;i<26;i++){let i=t.range(n,r),a=Xg(i)+t.sign()*t.range(1.3,2.2);e.isClear(a,i,.4)&&e.place(`dryGrass`,a,i,{scale:t.range(.6,1.1)})}for(let o=0;o<40;o++){let o=t.range(n,r),s=t.sign()*t.range(a+2,60);(c_(s,o,i)>.3||Math.abs(s)>28)&&e.place(t.chance(.5)?`grassTuft`:`dryGrass`,s,o,{scale:t.range(.8,1.5)})}for(let a of[-1,1])if(!(i.value(a*13,n*.01)<.45))for(let i=n+6;i<r;i+=12)t.chance(.15)||e.place(`railFence`,a*t.range(30.5,31.5),i,{rotY:Math.PI/2+t.range(-.04,.04)});let l=.6+i.value(n*.004,3)*1.4;for(let i=0;i<6*l;i++){let i=t.range(n,r);if(t.next()>e.weight(i))continue;let a=t.sign()*t.range(36,170);e.place(t.chance(.55)?`oakMoss`:`oak`,a,i,{scale:t.range(.8,1.35),tint:t.chance(.5)?16777215:15266008})}for(let i=0;i<5;i++){let i=t.range(n,r),a=t.sign()*t.range(120,205);e.place(`pine`,a,i,{scale:t.range(.9,1.3)})}for(let i=0;i<10;i++){let i=t.range(n,r),o=e.weight(i);o>.95||t.next()>1-o||e.place(t.chance(.7)?`shrub`:`oakMoss`,t.sign()*t.range(a+4,45),i,{scale:t.range(.6,1.1)})}let u=n-e.mapStart;if(u<=150&&u+(r-n)>150){let n=e.mapStart+150;e.place(`plantationHouse`,-150,n,{rotY:Math.PI/2,scale:1});for(let r=-128;r<=-40;r+=11)e.place(`oakMoss`,r,n-11,{scale:t.range(1,1.2)}),e.place(`oakMoss`,r,n+11,{scale:t.range(1,1.2)});e.place(`barn`,-120,n+60,{rotY:Math.PI/2}),e.feature(`birds`,-110,n,{count:8,radius:24,height:26})}if(u<=330&&u+(r-n)>330){let n=e.mapStart+330;for(let r=0;r<7;r++)e.place(`cabin`,72,n-30+r*11,{rotY:-Math.PI/2,scale:t.range(.95,1.05)});e.feature(`smokeColumn`,75,n+3,{size:.18})}if(t.chance(.2*e.weight(n))){let i=t.sign()*t.range(60,110),a=t.range(n+5,r-5);e.place(`barn`,i,a,{rotY:t.range(0,Math.PI)});for(let n=0;n<3;n++)e.place(`haystack`,i+t.range(-16,16),a+t.range(-16,16),{scale:t.range(.8,1.1)})}t.chance(.25)&&e.place(`haystack`,t.sign()*t.range(34,70),t.range(n,r),{scale:t.range(.8,1.15)}),t.chance(.12)&&e.feature(`birds`,t.sign()*t.range(20,60),t.range(n,r),{count:t.int(4,9),radius:16,height:18});for(let i=0;i<2;i++)e.place(`rock`,t.sign()*t.range(a+3,50),t.range(n,r),{scale:t.range(.4,.9)})}},u_=-.22,d_=new K(5194288),f_=new K(2892826),p_=new K(4870448),m_=new K(6968890),h_=new K(6969408),g_=(e,t,n)=>-.5+(n.fbm(e*.045,t*.045,3)+.25)*1.1+n.value(e*.2,t*.2)*.2,__=e=>Math.sin(e*.017+2)*3.2,v_=[[640,1],[1450,-1]],y_={id:`swamp`,name:`The Swamp`,caption:`The water hides your trail. It hides other things too.`,tuning:Yg.swamp,atmosphere:{skyZenith:4083029,skyHorizon:9081727,clouds:.72,cloudColor:8160376,sunGlow:13154442,sunColor:13222562,sunIntensity:1.25,sunElevation:12,sunAzimuth:-28,hemiSky:9149068,hemiGround:3946534,hemiIntensity:1.35,fogColor:6187610,fogDensity:.0175,exposure:1.08,grade:{gain:[.93,1,.96],lift:[0,.016,.012],saturation:.78,contrast:1.1,vignette:.55},bloom:.55,dust:.35,dustColor:14090106,mist:.85,mistColor:11845808,smoke:0,waterLevel:u_,waterColor:2765090,horizonColor:2041372,horizonTrees:1},terrain:{height(e,t,n){let r=wd(10.5,15,Math.abs(e));return(.04+n.value(e*.5,t*.5)*.08-.03*wd(1.5,0,Math.abs(e-__(t))))*(1-r)+g_(e,t,n)*r},color(e,t,n,r){let i=n.value(e*.1,t*.1);r.copy(d_).lerp(m_,i*.7),r.lerp(p_,wd(.45,.8,n.value(e*.05+9,t*.05))*.7);let a=y_.terrain.height(e,t,n);r.lerp(f_,wd(.25,-.15,a)),r.lerp(h_,(1-wd(.8,2.2,Math.abs(e-__(t))))*.5)},surface(e,t,n){return n.value(e*.05+9,t*.05)>.6?`grass`:`mud`}},ambience:{wind:.2,birds:.18,insects:.95,frogs:.85,water:.6,trees:.55,battle:0,fire:0,drone:.6,dronePitch:46},decorate(e){let{rng:t,d0:n,d1:r,noise:i,corridor:a}=e,o=(e,t)=>y_.terrain.height(e,t,i);for(let i=0;i<16;i++){let i=t.range(n,r);if(t.next()>e.weight(i))continue;let o=t.sign()*t.range(a+2.5,a+9);t.chance(.55)?e.place(`cypress`,o,i,{scale:t.range(.8,1.2),tint:14213320}):e.place(`oakMoss`,o,i,{scale:t.range(.85,1.25),tint:12109984})}for(let i=0;i<34;i++){let i=t.range(n,r);if(t.next()>e.weight(i))continue;let o=t.sign()*t.range(a+9,150),s=t.next();s<.55?e.place(`cypress`,o,i,{scale:t.range(.8,1.35),tint:13160632}):s<.78?e.place(`oakMoss`,o,i,{scale:t.range(.8,1.3),tint:11057296}):e.place(`deadTree`,o,i,{scale:t.range(.8,1.3),tilt:t.range(-.15,.15)})}for(let i=0;i<150;i++){let i=t.range(n,r);if(t.next()>e.weight(i))continue;let s=t.sign()*t.range(a-1,55),c=o(s,i);Math.abs(s)<a&&(!e.isClear(s,i,1.2)||t.chance(.6))||(c<-.3?t.chance(.35)&&e.place(`lilyPads`,s,i,{y:u_-c+.01,scale:t.range(.7,1.2)}):c<.03?e.place(`reeds`,s,i,{scale:t.range(.7,1.2)}):t.chance(.5)?e.place(`fern`,s,i,{scale:t.range(.7,1.3),tint:11583648}):t.chance(.4)?e.place(`shrub`,s,i,{scale:t.range(.5,1),tint:10135688}):e.place(`grassTuft`,s,i,{scale:t.range(.8,1.4),tint:10133616}))}for(let i=0;i<5;i++){let i=t.range(n,r);if(t.next()>e.weight(i))continue;let o=t.sign()*t.range(a+1.5,40),s=t.next();s<.45?e.place(`log`,o,i,{rotY:t.range(0,Math.PI),scale:t.range(.7,1.3)}):s<.8?e.place(`stump`,o,i,{scale:t.range(.7,1.4)}):e.place(`rock`,o,i,{scale:t.range(.5,1)})}if(e.mapStart>=n-5&&e.mapStart<r-5){let t=e.mapStart+8;e.place(`oakMoss`,-a-3,t,{scale:1.45,rotY:.4,tint:12109984}),e.place(`oakMoss`,a+3,t+4,{scale:1.5,rotY:3.6,tint:12109984}),e.feature(`signalLantern`,a+1.5,t+2,{height:3.2})}if(t.chance(.12*e.weight(n))){let i=t.sign(),o=t.range(n+4,r-4),s=i*(a+t.range(2,4));e.place(`oakMoss`,s+i*2,o,{scale:.9,tint:12109984}),e.feature(`signalLantern`,s,o,{height:t.range(2.6,3.4)})}for(let[i,o]of v_){let s=e.mapStart+i;if(s<n||s>=r)continue;let c=o*(a+3.6);e.place(`oak`,c+o*.4,s,{scale:1,rotY:t.range(0,Math.PI*2),tint:12109984}),e.feature(`hangingTree`,c,s,{facing:(o>0?Math.PI:0)+t.range(-.1,.1)}),e.feature(`birds`,c,s,{count:6,radius:7,height:11})}t.chance(.07*e.weight(n))&&e.place(`cabin`,t.sign()*t.range(35,70),t.range(n,r),{tint:6973016,scale:.85})}},b_=new K(8221264),x_=new K(4864811),S_=new K(2893344),C_=new K(8748114),w_=(e,t,n)=>wd(.78,.92,n.value(e*.12+50,t*.12))*.7,T_={id:`battlefield`,name:`The Battlefield`,caption:`The armies are between you and freedom. Keep low. Keep moving.`,tuning:Yg.battlefield,atmosphere:{skyZenith:5920595,skyHorizon:12295032,clouds:.85,cloudColor:7103580,sunGlow:16742456,sunColor:16757884,sunIntensity:2.1,sunElevation:15,sunAzimuth:12,hemiSky:11181196,hemiGround:6048310,hemiIntensity:1.7,fogColor:10193526,fogDensity:.0078,exposure:1.18,grade:{gain:[1.06,.97,.87],lift:[.022,.01,0],saturation:.7,contrast:1.12,vignette:.42},bloom:.5,dust:.55,dustColor:13616827,mist:.08,mistColor:13156016,smoke:1,waterLevel:-20,waterColor:3815982,horizonColor:3946290,horizonTrees:.55},terrain:{height(e,t,n){let r=wd(11,30,Math.abs(e)),i=Math.sin(t*.038)*.9+Math.sin(t*.011+1.7)*1.4+n.fbm(e*.02,t*.02,2)*.5,a=n.fbm(e*.009,t*.009,3)*7+n.fbm(e*.04,t*.04,2)*1;return n.value(e*.7,t*.7)*.08+i+r*(a+1.5)-w_(e,t,n)*r},color(e,t,n,r){let i=n.value(e*.09,t*.09);r.copy(b_).lerp(C_,i*.6),r.lerp(x_,wd(.5,.8,n.value(e*.04+7,t*.04))*.8),r.lerp(S_,w_(e,t,n)*1.2),r.lerp(x_,(1-wd(2,6,Math.abs(e)))*.35)},surface(e,t,n){return n.value(e*.04+7,t*.04)>.62?`mud`:`dirt`}},ambience:{wind:.35,birds:0,insects:.05,frogs:0,water:0,trees:.1,battle:1,fire:.5,drone:.7,dronePitch:41},decorate(e){let{rng:t,d0:n,d1:r,corridor:i}=e,a=(n+r)/2,o=e.weight(a);if(t.chance(.18*Math.min(1,o*3+.1))&&e.feature(`smokeColumn`,t.sign()*t.range(90,190),t.range(n,r),{size:t.range(.7,1.4)}),!(o<.05)){if(e.mapStart>=n-5&&e.mapStart<r-5){let t=e.mapStart+12;e.place(`burntHouse`,-i-9,t,{rotY:.3}),e.feature(`fire`,-i-9,t,{radius:2.6,intensity:1.3}),e.feature(`smokeColumn`,-i-9,t,{size:.9}),e.feature(`flag`,i+22,t+30,{army:0,height:3.6}),e.feature(`flag`,-i-26,t+34,{army:1,height:3.6})}for(let i of[-1,1]){let a=i>0?0:1;if(t.chance(.75*o)){let o=i*t.range(17,32);e.feature(`firingLine`,o,t.range(n+8,r-8),{army:a,count:t.int(10,16),facing:-i}),t.chance(.6)&&e.feature(`flag`,o+i*3,t.range(n,r),{army:a,height:3.6})}if(t.chance(.18*o)&&e.feature(`formation`,i*t.range(45,85),t.range(n,r),{army:a,rows:t.int(3,4),cols:t.int(6,8),dirZ:t.chance(.5)?-1:1,marching:+!!t.chance(.7)}),t.chance(.3*o)&&e.feature(`cannonBattery`,i*t.range(70,120),t.range(n+8,r-8),{count:t.int(2,4),facing:-i,interval:t.range(3.5,7)}),t.chance(.45*o)){let a=i*t.range(14,16.5);for(let i=n+t.range(0,3);i<r;i+=t.range(1.2,1.6))t.chance(.85)&&e.place(t.chance(.7)?`gabion`:`log`,a+t.range(-.3,.3),i,{scale:t.range(.9,1.1),rotY:Math.PI/2+t.range(-.1,.1)})}if(t.chance(.18*o)){let a=i*t.range(110,170),o=t.range(n,r);for(let n=0;n<t.int(4,9);n++)e.place(`tent`,a+t.range(-14,14),o+t.range(-14,14),{rotY:t.chance(.5)?0:Math.PI/2,scale:t.range(.9,1.1)})}}if(t.chance(.28*o)){let i=t.sign();e.feature(`charge`,-i*t.range(40,55),t.range(n+10,r-10),{army:+(i>0),count:t.int(14,24),dirX:i,speed:t.range(3,4)})}if(o>.3&&(e.feature(`corpses`,-t.range(12,30),t.range(n+6,r-6),{count:t.int(4,8),spread:9}),e.feature(`corpses`,t.range(12,30),t.range(n+6,r-6),{count:t.int(4,8),spread:9}),e.feature(`corpses`,t.range(-6,6),t.range(n+6,r-6),{count:t.int(1,4),spread:5})),t.chance(.14*o)){let i=t.sign()*t.range(30,80),a=t.range(n+6,r-6);e.place(`burntHouse`,i,a,{rotY:t.range(0,Math.PI*2)}),e.feature(`fire`,i,a,{radius:2.4,intensity:1.2}),e.feature(`smokeColumn`,i,a,{size:.7})}for(let a=0;a<9;a++){let a=t.range(n,r);if(t.next()>e.weight(a))continue;let o=t.sign()*t.range(i+3,160);t.chance(.55)?e.place(`deadTree`,o,a,{scale:t.range(.8,1.3),tilt:t.range(-.25,.25)}):t.chance(.6)?e.place(`stump`,o,a,{scale:t.range(.8,1.6)}):e.place(`oak`,o,a,{scale:t.range(.8,1.1),tint:9079408})}for(let a=0;a<6;a++){let a=t.range(n,r);if(t.next()>e.weight(a))continue;let o=t.sign()*t.range(i+1,30),s=t.next();s<.35?e.place(`wheel`,o,a):s<.6?e.place(`railFence`,o,a,{rotY:t.range(0,Math.PI),tilt:t.range(-.3,.3)}):s<.8?e.place(`rock`,o,a,{scale:t.range(.4,.8)}):e.place(`cannon`,o,a,{rotY:t.range(0,Math.PI*2),tilt:t.range(-.2,.2)})}for(let a=0;a<70;a++){let a=t.range(n,r);if(t.next()>e.weight(a))continue;let o=t.sign()*t.range(2,60);Math.abs(o)<i&&(!e.isClear(o,a,1.2)||t.chance(.5))||e.place(`dryGrass`,o,a,{scale:t.range(.6,1.2),tint:10129520})}}}},E_=class{maps={cotton:l_,swamp:y_,battlefield:T_};segments=[];blend={a:l_,b:l_,t:0};constructor(){let e=0;qg.forEach((t,n)=>{let r=e+t.length;this.segments.push({level:n+1,def:t,map:this.maps[t.map],start:n===0?-1e3:e,end:r}),e=r})}get levelCount(){return this.segments.length}segmentIndex(e){for(let t=this.segments.length-1;t>=0;t--)if(e>=this.segments[t].start)return t;return 0}blendAt(e,t=this.blend){let n=this.segmentIndex(e),r=this.segments[n],i=this.segments[n+1],a=vd.transitionLength;return t.a=r.map,i&&e>r.end-a?(t.b=i.map,t.t=wd(r.end-a,r.end,e)):(t.b=r.map,t.t=0),t}mapAt(e){let t=this.blendAt(e,{a:l_,b:l_,t:0});return t.t>.5?t.b:t.a}weightOf(e,t){let n=this.blendAt(t,{a:l_,b:l_,t:0}),r=0;return n.a.id===e&&(r+=1-n.t),n.b.id===e&&(r+=n.t),Math.min(1,r)}startOf(e,t){let n=this.segmentIndex(t),r=this.segments[n];if(r.map.id===e)return Math.max(0,r.start);let i=this.segments[n+1];return i&&i.map.id===e?i.start:r.end}levelAt(e){return this.segments[this.segmentIndex(e)].level}levelStart(e){return e<=1?0:this.segments[e-1].start}levelEnd(e){return this.segments[this.segmentIndex(e)].end}levelInfo(e){let t=this.segments[Math.max(0,Math.min(this.segments.length-1,e-1))];return{title:t.def.title,map:t.map}}get boundaries(){return this.segments.slice(0,-1).map(e=>e.end)}nextMapStart(e){return this.levelEnd(e)}},D_=class{kind;x;d;rx;rd;depth;bridge;minX;maxX;minD;maxD;constructor(e,t,n,r,i,a,o=null){this.kind=e,this.x=t,this.d=n,this.rx=r,this.rd=i,this.depth=a,this.bridge=o;let s=e===`crater`?1.6:.6;this.minX=t-r-s,this.maxX=t+r+s,this.minD=n-i-s,this.maxD=n+i+s}contains(e,t){return e>=this.minX&&e<=this.maxX&&t>=this.minD&&t<=this.maxD}height(e,t,n){if(!this.contains(e,t))return 0;let r=(e-this.x)/this.rx,i=(t-this.d)/this.rd;switch(this.kind){case`crater`:{let e=Math.sqrt(r*r+i*i);return(e<1?-this.depth*(1-e*e):0)+.32*Math.exp(-((e-1.05)*(e-1.05))/.035)}case`pond`:case`mud`:{let e=Math.sqrt(r*r+i*i);return-this.depth*(1-wd(.55,1,e))}case`ditch`:case`trench`:{let e=1-wd(.85,1.05,Math.abs(r)),t=1-wd(.55,1,Math.abs(i));return-this.depth*e*t}case`stream`:{let r=1-wd(.5,1,Math.abs(i)),a=-this.depth*r;return n&&this.bridge&&e>=this.bridge.minX&&e<=this.bridge.maxX&&Math.abs(t-this.d)<this.rd+1.2?this.bridge.gap>0&&Math.abs(t-this.d)<this.bridge.gap/2?a:.22:a}}}stain(e,t){if(!this.contains(e,t))return 0;let n=(e-this.x)/(this.rx+.8),r=(t-this.d)/(this.rd+.8);return this.kind===`ditch`||this.kind===`trench`||this.kind===`stream`?(1-wd(.8,1,Math.abs(n)))*(1-wd(.6,1,Math.abs(r))):1-wd(.6,1,Math.sqrt(n*n+r*r))}get stainColor(){switch(this.kind){case`crater`:return 2761244;case`mud`:return 3023127;case`pond`:case`stream`:return 2959900;case`trench`:return 4864554;case`ditch`:return 5915696}}},O_=class{maps;seed=1;rng=new Xf(1);nextRowD=0;pathX=0;pendingObstacles=[];pendingCollectibles=[];pendingDeformations=[];pendingRoute=[];lastFullWidthD=-1e3;lastRowBlocked=!1;constructor(e){this.maps=e}firstChunk=0;boundaries=[];reset(e,t=0,n=[]){this.seed=e,this.rng=new Xf(Yf(e,12648430)),this.firstChunk=Math.floor(t/vd.chunkLength),this.boundaries=n,this.nextRowD=t+gd.graceDistance,this.pathX=0,this.pendingObstacles=[],this.pendingCollectibles=[],this.pendingDeformations=[],this.pendingRoute=[],this.lastFullWidthD=-1e3,this.lastRowBlocked=!1}chunkRandom(e,t){return new Xf(Yf(this.seed,e,t))}get runSeed(){return this.seed}generate(e){let t=vd.chunkLength,n=e*t,r=n+t,i={index:e,d0:n,d1:r,obstacles:[],collectibles:[],deformations:[],route:[]};if(e<this.firstChunk)return i;for(;this.nextRowD<r+14;)this.generateRow();let a=(e,t)=>{let n=[];for(let i of e)(i.d<r?t:n).push(i);return n};return this.pendingObstacles=a(this.pendingObstacles,i.obstacles),this.pendingCollectibles=a(this.pendingCollectibles,i.collectibles),this.pendingDeformations=a(this.pendingDeformations,i.deformations),this.pendingRoute=a(this.pendingRoute,i.route),i}generateRow(){let e=this.rng,t=this.nextRowD,n=_f.rowSpacing(t),r=_f.at(t),i=n/(_f.runSpeed(t)*ud.sprintMultiplier),a=ud.strafeSpeed*i*gd.routeShiftSafety,o=_f.safePathWidth(t),s=ud.corridorHalfWidth-o/2-.3,c=e.range(-a,a)-this.pathX*.15;this.pathX=xd(this.pathX+c,-s,s);let l={min:this.pathX-o/2,max:this.pathX+o/2};this.pendingRoute.push({d:t,x:this.pathX});let u=this.maps.blendAt(t),d=e.next()<u.t?u.b:u.a,f=d.tuning,p=[],[m,h]=Jg,g=this.boundaries.some(e=>t>e-m&&t<e+h)?0:Math.floor(_f.obstaclesPerRow(t)*f.density+e.next()),_=Sd(.3,.75,r),v=this.lastRowBlocked,y=v,b=!1;for(let n=0;n<g&&!b;n++){let n=e.weighted(f.obstacles);if(!n||n===`open`)continue;let r=pm[n],i=Math.floor(e.next()*1e9),a=t+e.range(-.8,.8);if(n===`narrows`){if(p.length>0)continue;let t=e.range(r.depth[0],r.depth[1]),o=ud.corridorHalfWidth+1.5;if(l.min>-o+1){let e=l.min- -o;this.pendingObstacles.push({kind:n,x:-o+e/2,d:a,width:e,depth:t,seed:i,map:d.id})}if(l.max<o-1){let e=o-l.max;this.pendingObstacles.push({kind:n,x:l.max+e/2,d:a,width:e,depth:t,seed:i+1,map:d.id})}b=!0;continue}if(r.fullWidth){if(p.length>0||t-this.lastFullWidthD<60)continue;let o=e.range(r.depth[0],r.depth[1]),s=this.makeDeformation(n,0,a,13,o/2,e,l);if(!s)continue;let c=s.bridge?{x:this.pathX,width:s.bridge.maxX-s.bridge.minX,gap:s.bridge.gap}:void 0;this.pendingObstacles.push({kind:n,x:0,d:a,width:26,depth:o,seed:i,map:d.id,bridge:c}),this.pendingDeformations.push(s),this.lastFullWidthD=t,b=!0;continue}let o=r.collision!==`solid`&&!v&&e.next()<(r.collision===`slow`?.6:_);for(let t=0;t<8;t++){let s=e.range(r.width[0],r.width[1]),c=r.width[0]===r.depth[0]&&r.width[1]===r.depth[1]?s:e.range(r.depth[0],r.depth[1]),u=ud.corridorHalfWidth+.5-s/2,f=o&&t<3?xd(this.pathX+e.range(-1,1),-u,u):e.range(-u,u),m={min:f-s/2,max:f+s/2};if(p.some(e=>m.min<e.max+.9&&m.max>e.min-.9))continue;let h=m.min<l.max&&m.max>l.min;if(h&&(!o||r.collision===`solid`))continue;let g=null;if(!(r.deformation&&(g=this.makeDeformation(n,f,a,s/2,c/2,e,null),!g))){p.push(m),h&&r.collision!==`slow`&&(v=!0),this.pendingObstacles.push({kind:n,x:f,d:a,width:s,depth:c,seed:i,map:d.id}),g&&this.pendingDeformations.push(g);break}}}let x=v&&!y;this.placeCollectibles(t,n,d.tuning.collectibles,x),this.lastRowBlocked=x,this.nextRowD+=n*e.range(.9,1.2)}makeDeformation(e,t,n,r,i,a,o){let s=pm[e],c=vd.chunkLength,l=Math.floor(n/c)*c,u=s.deformation===`crater`?1.8:.8;if(n-i-u<l+.3||n+i+u>l+c-.3)return null;switch(s.deformation){case`crater`:return new D_(`crater`,t,n,r,i,a.range(.7,1.1));case`mud`:return new D_(`mud`,t,n,r,i,.14);case`pond`:return new D_(`pond`,t,n,r,i,.5);case`ditch`:return new D_(`ditch`,t,n,r,i,.75);case`trench`:return new D_(`trench`,t,n,r,i,1.25);case`stream`:{let e=2.4,t=a.chance(.35)?1.4:0,r=o?(o.min+o.max)/2:0;return new D_(`stream`,0,n,30,i,.55,{minX:r-e/2,maxX:r+e/2,gap:t})}default:return null}}placeCollectibles(e,t,n,r){let i=this.rng;if(e<gd.graceDistance+10||!i.chance(_d.chancePerRow))return;let a={};for(let[e,t]of Object.entries(_d.weights))a[e]=t*(n[e]??1);let o=i.weighted(a)??`mapPiece`;if(o===`mapPiece`){let[n,a]=_d.mapPieceTrailLength,s=i.int(n,a),c=Math.min(2.2,(t*.8-4)/s);for(let t=0;t<s;t++){let n=e-2-(s-1-t)*c;this.pendingCollectibles.push({type:o,x:this.pathX,d:n,y:1})}r&&this.pendingCollectibles.push({type:o,x:this.pathX,d:e,y:2.1})}else{let n=i.range(3,Math.max(3.5,t*.4));this.pendingCollectibles.push({type:o,x:this.pathX+i.range(-.8,.8),d:e+n,y:1})}}},k_=class{seed;constructor(e){this.seed=e}lattice(e,t){return Yf(e,t,this.seed)/4294967295}value(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=this.lattice(n,r),l=this.lattice(n+1,r),u=this.lattice(n,r+1),d=this.lattice(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}fbm(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=(this.value(e*o,t*o)*2-1)*a,c+=a,a*=i,o*=r;return s/c}},A_=class{maps;noise=new k_(1);blend;ca=new K;cb=new K;constructor(e){this.maps=e,this.blend=e.blendAt(0,{a:e.maps.cotton,b:e.maps.cotton,t:0})}reset(e){this.noise=new k_(e)}blendAt(e){return this.maps.blendAt(e,this.blend)}baseHeight(e,t,n=this.blendAt(t)){let r=n.a.terrain.height(e,t,this.noise);return n.t<=0||n.a===n.b?r:Sd(r,n.b.terrain.height(e,t,this.noise),n.t)}color(e,t,n,r=this.blendAt(t)){return r.a.terrain.color(e,t,this.noise,this.ca),r.t<=0||r.a===r.b?n.copy(this.ca):(r.b.terrain.color(e,t,this.noise,this.cb),n.copy(this.ca).lerp(this.cb,r.t))}surface(e,t){let n=this.blendAt(t);return(n.t>.5?n.b:n.a).terrain.surface(e,t,this.noise)}waterLevel(e){let t=this.blendAt(e);return Sd(t.a.atmosphere.waterLevel,t.b.atmosphere.waterLevel,t.t)}},j_=class{scene;bus;maps=new E_;terrain;generator;decor;features;chunks;environment;particles;ambient;obstacles;collectibles;rain;characters;wetness=0;splashAcc=0;currentMap=null;time=0;groundFn=(e,t)=>this.chunks.groundHeight(e,t);ground={height:(e,t)=>this.chunks.groundHeight(e,t),surface:(e,t)=>{let n=this.terrain.surface(e,t);return this.wetness>.6&&n===`dirt`?`mud`:n},waterLevel:e=>this.terrain.waterLevel(e)};constructor(e,t,n){this.scene=e,this.bus=n,this.terrain=new A_(this.maps),this.generator=new O_(this.maps),this.decor=new gg(e),this.characters=new Ah(e),this.features=new Kg(e,this.characters),this.chunks=new Rh(e,this.generator,this.terrain,this.maps,this.decor,this.features),this.environment=new wg(e,t),this.particles=new lh(e),this.ambient=new ah(this.particles),this.obstacles=new ih(e,n,this.particles),this.collectibles=new fm(e,n),this.rain=new mh(e);let r=(e,t)=>this.chunks.groundHeight(e,t);this.chunks.onPopulate=e=>{this.obstacles.populate(e,r),this.collectibles.populate(e,r)},this.decor.warmUp()}reset(e,t=0){let n=new Xf(Yf(e,937));this.terrain.reset(e),this.generator.reset(e,t,this.maps.boundaries),this.environment.randomizeWeather(n),this.chunks.reset(),this.particles.clear(),this.currentMap=null,this.chunks.fill(t),this.decor.flush()}get mapName(){return this.currentMap?.name??``}get map(){return this.currentMap}update(e,t,n,r=null){this.time+=e,this.chunks.update(t.d,1),this.decor.flush();let i=this.terrain.blendAt(t.d);this.environment.update(e,i,n,t.x,t.z,r),this.wetness=r?.state.wet??0;let a=r?.state.rain??0,o=this.environment.current;for(this.rain.update(e,n,a,r?.state.wind??1,Math.min(1,(o.hemiIntensity+o.sunIntensity)/4)),this.splashAcc+=e*a*40;this.splashAcc>1;){--this.splashAcc;let e=t.x+(Math.random()-.5)*14,n=t.d+Math.random()*16-2;this.particles.spawnSmoke({x:e,y:this.chunks.groundHeight(e,n)+.03,z:-n,vy:.6,life:.25,size:.05,endSize:.22,alpha:.5,color:13159632,lift:-4,fadeIn:.05})}let s=i.t>.5?i.b:i.a;if(s!==this.currentMap){let e=this.currentMap===null;this.currentMap=s,(!e||s.id===`cotton`)&&this.bus.emit(`map:enter`,{id:s.id,name:s.name,caption:s.caption})}this.obstacles.update(e,this.time,t.d),this.collectibles.update(e,this.time),this.features.update({dt:e,time:this.time,playerX:t.x,playerD:t.d,particles:this.particles,bus:this.bus,characters:this.characters,groundHeight:this.groundFn}),this.characters.update(e,n.position);let c=n.position;this.ambient.update(e,this.environment.current,c.x,c.y,c.z,t.speed);let l=this.environment.current;this.particles.smoke.tint.copy(this.environment.hemi.color).multiplyScalar(.55+l.hemiIntensity*.25+l.sunIntensity*.08),this.particles.update(e)}},M_=Object.keys(uh.clear),N_=class{kind=`clear`;from=`clear`;state={...uh.clear};flash=0;blend=1;timer=60;lightningTimer=5;flashQueue=[];flashStrength=1;rng;reset(e){this.rng=e,this.kind=this.from=this.pick(null),this.blend=1,this.timer=e.range(...dh.duration),this.flash=0,this.flashQueue=[],this.apply()}pick(e){let t={...dh.weights};return e&&(t[e]=0),this.rng.weighted(t)??`clear`}change(e,t){this.from=this.kind,this.kind=e??this.pick(this.kind),this.blend=0,this.timer=this.rng.range(...dh.duration),t?.emit(`weather:change`,{kind:this.kind})}cycle(e){let t=Object.keys(uh);this.change(t[(t.indexOf(this.kind)+1)%t.length],e),this.blend=.85}update(e,t){if(!this.rng)return;this.timer-=e,this.timer<=0&&this.change(void 0,t),this.blend<1&&(this.blend=Math.min(1,this.blend+e/dh.transition)),this.apply();let n=this.state.lightning;if(n>.05&&(this.lightningTimer-=e,this.lightningTimer<=0)){this.lightningTimer=this.rng.range(.4,1.6)*60/n;let e=this.rng.range(.2,1),r=1-e*.6;this.flashQueue.push(0,.09,...this.rng.chance(.5)?[.22]:[]),this.flashStrength=r,t.emit(`weather:thunder`,{delay:.3+e*4,strength:r})}this.flash=Math.max(0,this.flash-e*7);for(let t=this.flashQueue.length-1;t>=0;t--)this.flashQueue[t]-=e,this.flashQueue[t]<=0&&(this.flash=Math.max(this.flash,this.flashStrength*(.7+Math.random()*.3)),this.flashQueue.splice(t,1))}apply(){let e=uh[this.from],t=uh[this.kind],n=wd(0,1,this.blend);for(let r of M_)this.state[r]=Sd(e[r],t[r],n)}get label(){return this.blend<1?`${this.from} → ${this.kind} ${(this.blend*100).toFixed(0)}%`:this.kind}},P_={first:[10,18],interval:[32,52],viewDistance:24,startX:24,runnerSpeed:7,shotChance:.5},F_=Lf(),I_=new U,L_=class{characters;particles;bus;scene=null;pending=null;timer=40;constructor(e,t,n){this.characters=e,this.particles=t,this.bus=n}reset(e){this.end(),this.pending=null,this.timer=e.range(...P_.first)}triggerAhead(e){let t=P_;return Math.max(e.speed,4)*(t.startX/t.runnerSpeed)+t.viewDistance}end(){let e=this.scene;if(!e)return;let t=this.characters;t.humans.remove(e.runner);for(let n of e.soldiers)t.humans.remove(n.h);t.humans.remove(e.rider),t.horses.remove(e.horse),this.scene=null}update(e,t,n,r,i,a,o=e=>e){if(this.scene){this.play(e,t,r,a),this.scene&&t.d>this.scene.d+25&&this.end();return}if(this.pending){let e=this.pending.d-t.d;!i||e<P_.viewDistance?this.pending=null:e<=this.triggerAhead(t)&&(this.begin(this.pending,n),this.pending=null);return}if(this.timer-=e,this.timer>0||!i)return;this.timer=n.range(...P_.interval);let s=o(t.d+this.triggerAhead(t)+25);this.pending={kind:n.chance(P_.shotChance)?`shot`:`chase`,d:s,dir:n.sign()}}begin(e,t){let n=this.characters,r=n.humans.spawn(Kf.runner(t.next()));if(!r)return;let{kind:i,dir:a}=e,o={kind:i,d:e.d,dir:a,t:0,runner:r,runnerX:-a*P_.startX,runnerDown:-1,fallFrom:null,soldiers:[],horse:null,rider:null,riderX:-a*(P_.startX+15)};if(i===`shot`)for(let e=0;e<3;e++){let r=n.humans.spawn(Kf.confederate(t.next()));r&&o.soldiers.push({h:r,x:-a*(P_.startX+12+e*2.5),oz:(e-1)*2.2,aiming:!1,fired:!1})}else o.horse=n.horses.spawn(3811870),o.rider=n.humans.spawn(Kf.catcher(t.next()));this.scene=o,this.bus.emit(`pursuit:cue`,{kind:i===`shot`?`shout`:`horse`,distance:30,pan:-a*.6})}play(e,t,n,r){let i=this.scene;i.t+=e;let a=i.dir>0?-Math.PI/2:Math.PI/2;if(i.runnerDown<0){i.runnerX+=i.dir*P_.runnerSpeed*e;let t=Hf.run(i.runner.pose,r*P_.runnerSpeed*Math.PI/1.9,1,!1),o=n(i.runnerX,i.d);i.runner.pose.x=i.runnerX,i.runner.pose.y=o+kf.hipHeight+t,i.runner.pose.z=-i.d,i.runner.pose.yaw=a}else if(!i.runner.isStatic){i.fallFrom??=Vf(i.runner.pose,Lf()),i.runnerDown+=e;let t=Math.min(1,i.runnerDown/.6);i.runnerX+=i.dir*3*e*(1-t);let r=n(i.runnerX,i.d);Hf.lying(F_,0),F_.y=r+Uf,i.fallFrom.y=r+kf.hipHeight,Bf(i.fallFrom,F_,t*t,i.runner.pose),i.runner.pose.x=i.runnerX,i.runner.pose.z=-i.d,i.runner.pose.yaw=a,t>=1&&(i.runner.isStatic=!0)}i.kind===`shot`?this.playShot(i,e,t,n,r,a):this.playChase(i,e,n,r,a)}playShot(e,t,n,r,i,a){let o=P_,s=(o.startX-2)/o.runnerSpeed,c=s+.75;for(let n of e.soldiers){let l=e.d+n.oz,u=r(n.x,l);if(e.t<s){let r=o.runnerSpeed*.92;n.x+=e.dir*r*t;let a=Hf.run(n.h.pose,i*r*Math.PI/1.8+n.oz,1,!0);n.h.pose.y=u+kf.hipHeight+a}else Hf.aim(n.h.pose,n.fired?Math.max(0,1-(e.t-c)*3):0),n.h.pose.y=u+kf.hipHeight;n.h.pose.x=n.x,n.h.pose.z=-l,n.h.pose.yaw=a,!n.fired&&e.t>=c+n.oz*.05&&(n.fired=!0,this.characters.humans.muzzle(n.h,I_),this.particles.muzzle(I_.x,I_.y,I_.z,e.dir,0,!1))}e.t>=c&&e.runnerDown<0&&(e.runnerDown=0,this.bus.emit(`battle:volley`,{distance:Math.max(20,e.d-n.d),pan:0,count:e.soldiers.length}),this.bus.emit(`pursuit:cue`,{kind:`shout`,distance:Math.max(20,e.d-n.d),pan:-e.dir*.5}))}playChase(e,t,n,r,i){if(!e.horse||!e.rider)return;e.riderX+=e.dir*9*t,Math.abs(e.riderX-e.runnerX)<5&&(e.riderX=e.runnerX-e.dir*5);let a=e.d+1.5,o=e.horse;o.x=e.riderX,o.z=-a,o.y=n(e.riderX,a),o.yaw=i,o.speed=9,Hf.ride(e.rider.pose,r,!1),e.rider.pose.rArm=[1.6,.3,.6],e.rider.pose.x=o.x,e.rider.pose.z=o.z,e.rider.pose.y=o.y+o.dims.saddleY+o.bob,e.rider.pose.yaw=i,e.t>2&&Math.abs(e.runnerX)>140&&this.end()}},R_=class{handlers=new Map;on(e,t){let n=this.handlers.get(e);return n||this.handlers.set(e,n=new Set),n.add(t),()=>n.delete(t)}emit(e,...t){let n=this.handlers.get(e);if(n)for(let e of n)e(t[0])}},z_=class{update;maxDelta;running=!1;last=0;rafId=0;fps=60;constructor(e,t=1/20){this.update=e,this.maxDelta=t}start(){this.running||(this.running=!0,this.last=performance.now(),this.rafId=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}tick=e=>{if(!this.running)return;let t=Math.max(0,(e-this.last)/1e3);this.last=e,t>0&&(this.fps+=(1/t-this.fps)*.05),this.update(Math.min(t,this.maxDelta),e/1e3),this.rafId=requestAnimationFrame(this.tick)}},B_=class{element;down=new Set;pressed=new Set;mouseDX=0;mouseDY=0;pointerLocked=!1;onPointerLockChange=null;constructor(e){this.element=e,window.addEventListener(`keydown`,this.handleKeyDown),window.addEventListener(`keyup`,this.handleKeyUp),window.addEventListener(`blur`,()=>this.down.clear()),document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`pointerlockchange`,()=>{this.pointerLocked=document.pointerLockElement===this.element,this.onPointerLockChange?.(this.pointerLocked)})}handleKeyDown=e=>{[`Space`,`F1`,`F2`,`F3`,`F4`,`F5`,`F6`,`Tab`,`ArrowUp`,`ArrowDown`].includes(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)};handleKeyUp=e=>{this.down.delete(e.code)};handleMouseMove=e=>{this.pointerLocked&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)};isDown(...e){for(let t of e)if(this.down.has(t))return!0;return!1}wasPressed(...e){for(let t of e)if(this.pressed.has(t))return!0;return!1}consumeMouse(){let e={dx:this.mouseDX,dy:this.mouseDY};return this.mouseDX=this.mouseDY=0,e}requestPointerLock(){if(!this.pointerLocked)try{this.element.requestPointerLock()?.catch?.(()=>{})}catch{}}exitPointerLock(){this.pointerLocked&&document.exitPointerLock()}endFrame(){this.pressed.clear()}},V_={masterVolume:.8,ambienceVolume:.8,mouseLook:!0,mouseSensitivity:1,invertY:!1,headBob:1,fov:md.fov,quality:bd.defaultQuality},H_=class{data;listeners=[];constructor(){this.data={...V_,...Kp.get(`settings`,{})}}set(e,t){this.data[e]=t,Kp.set(`settings`,this.data);for(let e of this.listeners)e(this.data)}onChange(e){this.listeners.push(e)}},U_=2.8,W_=new class{canvas;uiRoot;renderer;scene=new Pn;camera;bus=new R_;input;settings=new H_;stats=new Jp;loop;players;world;pursuit;hazards;post;ui;audio;autopilot=new Jf;arms=new Sp;weather=new N_;story;state=qp.Menu;eventRng=new Xf(1);stateTime=0;fixedSeed=null;pixelRatio=1;godMode=!1;autopilotOn=!1;constructor(e,t){this.canvas=e,this.uiRoot=t,this.renderer=new ld({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.outputColorSpace=Re,this.renderer.toneMapping=4,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.camera=new Ss(this.settings.data.fov,1,.1,1500),this.input=new B_(e),this.players=new Ip(this.input,this.bus,this.camera,this.settings),this.scene.add(this.players.view.body),this.players.view.body.add(this.arms.root),this.world=new j_(this.scene,this.renderer,this.bus),this.pursuit=new qf(this.bus,this.world.characters,this.world.particles),this.hazards=new vf(this.scene,this.bus,this.world.particles),this.story=new L_(this.world.characters,this.world.particles,this.bus),this.post=new gf(this.renderer,this.scene,this.camera),this.audio=new Xd(this.bus,this.settings),this.ui=new $p(t,this.settings,{pickLevel:e=>this.startRun(e),resume:()=>this.resume(),quitToMenu:()=>this.toMenu(),retry:()=>this.startRun(this.stats.startLevel)},this.levelOptions()),this.loop=new z_(e=>this.frame(e));let n=new URLSearchParams(location.search);n.has(`seed`)&&(this.fixedSeed=Number(n.get(`seed`))||1),n.has(`debug`)&&this.ui.debug.toggle(),this.wireEvents(),this.applyQuality(this.settings.data.quality),this.settings.onChange(e=>this.applyQuality(e.quality)),window.addEventListener(`resize`,()=>this.resize()),this.resize(),this.toMenu()}start(){this.loop.start()}newSeed(){return this.fixedSeed??Zf()}toMenu(){this.state=qp.Menu,this.stateTime=0,this.audio.active=!1,this.audio.setPaused(!1),this.input.exitPointerLock(),this.resetWorld(this.newSeed()),this.ui.hideAllScreens(),this.ui.hud.hide(),this.ui.captions.clear(),this.ui.menu.show(),this.post.fade=0}levelOptions(){let e=this.world.maps;return Array.from({length:e.levelCount},(t,n)=>{let r=e.levelInfo(n+1);return{level:n+1,title:r.title,name:r.map.name,startsAt:e.levelStart(n+1)}})}startRun(e=1){this.resetWorld(this.newSeed(),e),this.state=qp.Playing,this.stateTime=0,this.audio.active=!0,this.audio.setPaused(!1),this.ui.hideAllScreens(),this.ui.hud.show(),this.ui.captions.clear(),this.settings.data.mouseLook&&this.input.requestPointerLock(),this.bus.emit(`run:start`,{seed:this.stats.seed}),window.setTimeout(()=>{this.state===qp.Playing&&this.showLevelCard(e,!1)},700)}showLevelCard(e,t){let n=this.world.maps.levelInfo(e);this.ui.levelCard.show(n.title,n.map.name,n.map.caption,t)}resetWorld(e,t=1){let n=this.world.maps.levelStart(t);this.stats.reset(e,t,n),this.eventRng=new Xf(Yf(e,77)),this.world.reset(e,n),this.weather.reset(new Xf(Yf(e,1918))),this.players.reset(),this.players.player.d=n,this.pursuit.reset(),this.hazards.reset(),this.story.reset(this.eventRng),this.post.danger=this.post.desaturate=this.post.flash=0}pause(){this.state===qp.Playing&&(this.state=qp.Paused,this.audio.setPaused(!0),this.input.exitPointerLock(),this.ui.pause.show())}resume(){this.state===qp.Paused&&(this.ui.closePanel(),this.ui.pause.hide(!0),this.state=qp.Playing,this.audio.setPaused(!1),this.settings.data.mouseLook&&this.input.requestPointerLock())}endCause=`caught`;beginCapture(e){this.endCause=e,this.state=qp.Dying,this.stateTime=0,e===`shot`&&this.players.movement.startFall(this.players.player),this.input.exitPointerLock()}toGameOver(){this.state=qp.GameOver,this.audio.active=!1;let e=Math.floor(this.stats.distance),t=Yp.submit(e);Yp.addPieces(this.stats.mapPieces);let n=this.world.map?.id??`cotton`,r=this.eventRng.pick(this.endCause===`shot`?$d[n]:Qd[n]);this.ui.hud.hide(),this.ui.captions.clear(),this.ui.gameOver.open({distance:e,best:Yp.best,pieces:this.stats.mapPieces,isNewBest:t,cause:r}),this.bus.emit(`run:end`,{distance:e,collectibles:this.stats.collectibles,best:Yp.best,isNewBest:t,cause:r})}wireEvents(){let e=this.players.view;this.bus.on(`player:hit`,t=>{e.shake(.3+t.severity*.3),e.kick(1.5*t.severity),this.post.flash=Math.min(1,.45+t.severity*.3),this.stats.hits++}),this.bus.on(`player:wounded`,()=>{e.shake(.6),e.kick(2),this.post.flash=1}),this.bus.on(`player:land`,t=>e.kick(.5+t.impact*1.2)),this.bus.on(`player:fall`,t=>{let n=this.players.player;t.stage===`impact`?(e.shake(.55),this.post.flash=Math.max(this.post.flash,.5),this.world.particles.dustKick(n.x,n.y,n.z-.8,3,9073752)):t.stage===`getup`&&this.world.particles.dustKick(n.x,n.y,n.z-.5,1,9073752)}),this.bus.on(`battle:explosion`,t=>e.shake(Math.max(0,.7-t.distance/60))),this.bus.on(`battle:cannon`,t=>e.shake(Math.max(0,.12-t.distance/1500))),this.bus.on(`player:footstep`,e=>{let t=this.players.player;e.surface===`dirt`&&this.state===qp.Playing&&Math.random()<.5&&this.world.particles.dustKick(t.x+(Math.random()-.5)*.4,t.y,t.z+.6,.4,10123864)}),this.bus.on(`player:splash`,()=>{let e=this.players.player;this.world.particles.splash(e.x,e.y,e.z-.4,1)}),this.bus.on(`collectible:pickup`,e=>{if(this.stats.collectibles++,e.type===`mapPiece`){this.stats.mapPieces++;let e=_d.piecesPerRouteFragment;if(this.stats.mapPieces%e===0){let t=(this.stats.mapPieces/e-1)%Zd.length;this.ui.captions.showStory(`Route fragment ${this.stats.mapPieces/e}`,Zd[t])}}}),this.bus.on(`level:up`,e=>this.showLevelCard(e.level,e.unlocked)),this.input.onPointerLockChange=e=>{!e&&this.state===qp.Playing&&this.settings.data.mouseLook&&this.pause()},this.canvas.addEventListener(`click`,()=>{this.state===qp.Playing&&this.settings.data.mouseLook&&this.input.requestPointerLock()})}applyQuality(e){this.pixelRatio=Math.min(window.devicePixelRatio,bd.maxPixelRatio[e]),this.renderer.setPixelRatio(this.pixelRatio);let t=bd.shadowMapSize[e];this.renderer.shadowMap.enabled=t>0,this.world.environment.setShadowQuality(t),this.post.setBloom(bd.bloom[e]),this.world.chunks.density=e===`high`?1:e===`medium`?.7:.45,this.scene.traverse(e=>{let t=e.material;t&&(t.needsUpdate=!0)}),this.resize()}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.post.setSize(e,t,this.pixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}handleGlobalKeys(){let e=this.input;e.wasPressed(`F1`,`Backquote`)&&this.ui.debug.toggle(),e.wasPressed(`Escape`,`KeyP`)&&(this.ui.closePanel()||(this.state===qp.Playing?this.pause():this.state===qp.Paused&&this.resume())),this.ui.debug.visible&&(e.wasPressed(`F2`)&&(this.godMode=!this.godMode),e.wasPressed(`F3`)&&this.world.obstacles.setDebug(!this.world.obstacles.debugEnabled),e.wasPressed(`F4`)&&this.skipToNextMap(),e.wasPressed(`F5`)&&(this.autopilotOn=!this.autopilotOn),e.wasPressed(`F6`)&&this.weather.cycle(this.bus))}skipToNextMap(){if(this.state!==qp.Playing)return;let e=this.players.player,t=this.world.maps.nextMapStart(e.d)-360;if(!(!Number.isFinite(t)||t<=e.d)){for(;e.d<t;)e.d=Math.min(t,e.d+30),this.world.chunks.update(e.d,3);this.world.chunks.fill(e.d)}}frame(e){this.handleGlobalKeys(),this.stateTime+=e;let t=this.players.player,n=_f.runSpeed(t.d);switch(this.state!==qp.Paused&&this.weather.update(e,this.bus),this.state){case qp.Menu:{let n=this.autopilot.update(t,this.world.chunks,this.world.obstacles);this.players.update(e,ud.baseRunSpeed*.55,this.world.ground,n),t.stamina=100,this.world.update(e,t,this.camera,this.weather);break}case qp.Playing:this.updatePlaying(e,n);break;case qp.Dying:this.players.update(e,0,this.world.ground,`none`,this.endCause===`caught`&&this.stateTime>.4),this.endCause===`shot`&&(t.fallTime=Math.min(t.fallTime,dd.pushUpAt-.3)),t.speed*=Math.max(0,1-e*2.5),this.pursuit.update(e,t,this.eventRng,this.world.ground.height),this.world.update(e,t,this.camera,this.weather),this.post.fade=Math.min(1,Math.max(0,(this.stateTime-1.2)/1.5999999999999999)),this.post.danger=1,this.stateTime>=U_&&this.toGameOver();break;case qp.GameOver:this.post.fade=Math.max(.55,this.post.fade-e*.5);break;case qp.Paused:}if(this.state!==qp.Paused){this.arms.update(e,this.players.player),this.arms.root.visible=this.players.view.headTurn<1.1;let t=this.players.player;this.audio.update(e,this.world.terrain.blendAt(t.d),t,this.state===qp.Playing,this.weather.state)}this.post.update(e,this.world.environment.current),this.post.render(),this.updateDebug(e),this.input.endFrame()}updatePlaying(e,t){let n=this.players.player,r=this.autopilotOn?this.autopilot.update(n,this.world.chunks,this.world.obstacles):`input`;this.players.update(e,t,this.world.ground,r),this.godMode&&(n.invulnerableTimer=Math.max(n.invulnerableTimer,.1)),this.world.obstacles.collide(n)?.trip&&this.players.movement.startFall(n),this.world.collectibles.collect(n);let i=this.world.maps.weightOf(`battlefield`,n.d);this.hazards.update(e,n,i,this.eventRng,this.world.ground.height),this.godMode&&(this.pursuit.gap=Math.max(this.pursuit.gap,40)),this.pursuit.update(e,n,this.eventRng,this.world.ground.height);let a=this.world.maps.boundaries.some(e=>n.d>e-160&&n.d<e+60);this.story.update(e,n,this.eventRng,this.world.ground.height,!a,this.stats.time,e=>this.world.maps.mapAt(e).id===`cotton`?s_(e):e),this.world.environment.lantern=Math.min(1,n.lanternTimer/2),this.world.update(e,n,this.camera,this.weather),this.stats.distance=n.d-this.stats.startDistance,this.stats.time+=e,this.stats.currentMap=this.world.mapName;let o=this.world.maps,s=o.levelAt(n.d);if(s>this.stats.level){this.stats.level=s;let e=Yp.unlockLevel(s);this.bus.emit(`level:up`,{level:s,unlocked:e})}let c=o.levelEnd(n.d),l=o.levelInfo(s+1),u=Number.isFinite(c)?`${o.levelInfo(s).title} · ${l.map.name.replace(/^The /,`the `)} in ${Math.max(0,Math.ceil(c-n.d)).toLocaleString(`en-US`)} m`:`${o.levelInfo(s).title} · ${this.world.mapName}`;this.ui.hud.update(n,this.stats.distance,this.stats.mapPieces,this.pursuit.gap,u),this.ui.hud.setHint(this.settings.data.mouseLook&&!this.input.pointerLocked&&this.stateTime>1.5);let d=1-Math.max(0,n.health)/fd.max;this.post.danger=Math.max(this.pursuit.danger,d*.75),this.post.desaturate=n.exhausted?1:Math.max(0,.3-n.staminaFraction)*2,this.pursuit.shotDown?this.beginCapture(`shot`):this.pursuit.caught&&this.beginCapture(`caught`)}darkness(){let e=this.world.environment.current;return Math.max(0,Math.min(1,(2.2-e.sunIntensity)/1.2))}updateDebug(e){this.ui.debug.update(e,()=>{let e=this.players.player,t=this.renderer.info,n=this.world.terrain.blendAt(e.d),r=this.world.decor.stats().find(e=>e.kind===`cottonPlant`);return[`FPS            ${this.loop.fps.toFixed(0)}`,`State          ${this.state}`,`Player pos     x ${e.x.toFixed(2)}  y ${e.y.toFixed(2)}  d ${e.d.toFixed(1)}`,`Player speed   ${e.speed.toFixed(2)} m/s  (base ${_f.runSpeed(e.d).toFixed(2)})`,`Current map    ${this.world.mapName}${n.t>0?`  → ${n.b.name} ${(n.t*100).toFixed(0)}%`:``}`,`Level          ${this.world.maps.levelAt(e.d)}  (journey ${e.d.toFixed(0)} m)`,`Weather        ${this.weather.label}`,`Chunk          ${Math.floor(e.d/40)}  (live ${this.world.chunks.chunks.size})`,`Difficulty     ${(_f.at(e.d)*100).toFixed(0)}%`,`Pursuit gap    ${this.pursuit.gap.toFixed(1)} m  danger ${(this.pursuit.danger*100).toFixed(0)}%`,`Stamina        ${e.stamina.toFixed(1)}${e.exhausted?` EXHAUSTED`:``}${e.sprinting?` SPRINT`:``}`,`Seed           ${this.stats.seed}`,`Draw calls     ${t.render.calls}   tris ${(t.render.triangles/1e3).toFixed(0)}k`,`Obstacles      ${this.world.obstacles.active.size}   pickups ${this.world.collectibles.active.size}`,`Particles      ${this.world.particles.smoke.alive+this.world.particles.glow.alive}   features ${this.world.features.activeCount}`,`Cotton inst.   ${r?.used??0}/${r?.capacity??0}`,`Best           ${Dd(Yp.best)}`,``,`F2 god mode ${this.godMode?`ON`:`off`}   F3 collision boxes   F4 skip to next map   F5 autopilot ${this.autopilotOn?`ON`:`off`}   F6 next weather`]})}}(document.getElementById(`game-canvas`),document.getElementById(`ui-root`));W_.start(),window.game=W_;