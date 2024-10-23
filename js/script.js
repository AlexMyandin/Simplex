"use strict";

const htmlElement = document.documentElement;
const headElemnt = document.head;
const bodyElement = document.body;



function arrayMinIndex(arr) {
	var len = arr.length, min = Infinity;
	let index = 0;
	for (let k = 0; k < len; k++) {
		if(arr[k]< min){
			min = arr[k];
			index = k;
		}
	}
	return index;
 };
 

 function arrayMinIndexQ(arr) {
	var len = arr.length, min = Infinity;
	let index = 0;
	for (let k = 0; k < len; k++) {
		if(arr[k]< min && arr[k]!=0){
			min = arr[k];
			index = k;
		}
	}
	return index;
 };

//simplex


function restrictionsPaint(oldValRestrNox,restrNox) {
	if (oldValRestrNox > restrNox){
		for (let index = oldValRestrNox-1; index >= restrNox; index--) {
			restrictions.querySelector(`#restrictionsArr-${index}`).remove();
			condRest.querySelector(`#cond-${index}`).remove();
		}
		oldValRestrNox = restrNox;
		return;
	}

	for (let index = oldValRestrNox; index < restrNox; index++) {
		if (index==0){
			restrictions.insertAdjacentHTML(
				'beforeend',
				`<div id="restrictionsArr-${index}"></div>`
			);
			let restrStr = restrictions.querySelector(`#restrictionsArr-${index}`);

			for (let index = 0; index < oldValVarsBox; index++) {
				if (index==0){
					restrStr.insertAdjacentHTML(
						'beforeend',
						`<div style="display:inline-block" id="targetFunArr-${index}"><input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
					);
				}
				else{
					restrStr.insertAdjacentHTML(
						'beforeend',
						`<div style="display:inline-block" id="targetFunArr-${index}"><span> + </span><input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
					);
				}
			}

			condRest.insertAdjacentHTML(
				'beforeend',
				`<div id="cond-${index}" style="margin-bottom:21px;"><select><option value="≤">≤</option></select> <input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px; text-align: left;"></div>`
			);


		}
		else{
			restrictions.insertAdjacentHTML(
				'beforeend',
				`<div  id="restrictionsArr-${index}"></div>`
			);

			let restrStr = restrictions.querySelector(`#restrictionsArr-${index}`);

			for (let index = 0; index < oldValVarsBox; index++) {
				if (index==0){
					restrStr.insertAdjacentHTML(
						'beforeend',
						`<div style="display:inline-block" id="targetFunArr-${index}"><input placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
					);
				}
				else{
					restrStr.insertAdjacentHTML(
						'beforeend',
						`<div style="display:inline-block" id="targetFunArr-${index}"><span> + </span><input placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
					);
				}
			}

			condRest.insertAdjacentHTML(
				'beforeend',
				`<div id="cond-${index}" style="margin-bottom:21px;"><select><option value="≤">≤</option></select> <input placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px; text-align: left;"></div>`
			);
		}
	}

}

function targetFunPaint(oldValVarsBox,varsBox) {
	if (oldValVarsBox > varsBox){
		for (let index = oldValVarsBox-1; index >= varsBox; index--) {
			targetFun.querySelector(`#targetFunArr-${index}`).remove();
		}
		for (let index = 0; index < oldValRestrNox; index++) {
			let restrStr = restrictions.querySelector(`#restrictionsArr-${index}`);
			for (let j = oldValVarsBox-1; j >= varsBox; j--) {
				restrStr.querySelector(`#targetFunArr-${j}`).remove();
			}
		}
		for (let index = oldValVarsBox-1; index >= varsBox; index--) {
			restVars.querySelector(`#resvar-${index}`).remove();
		}
		oldValVarsBox = varsBox;
		return;
	}

	for (let index = oldValVarsBox; index < varsBox; index++) {
		if (index==0){
			targetFun.insertAdjacentHTML(
				'beforeend',
				`<div style="display:inline-block" id="targetFunArr-${index}"><input type="number" placeholder="0" inputmode="decimal" autocomplete="off"  style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
			);
			restVars.insertAdjacentHTML(
				'beforeend',
				`<div id="resvar-${index}" style="display:inline-block;"><span>X</span><sub>${index+1}</sub><span>, </span></div>`
			);
			for (let j = 0; j < oldValRestrNox; j++) {
				let restrStr = restrictions.querySelector(`#restrictionsArr-${j}`);
				restrStr.insertAdjacentHTML(
					'beforeend',
					`<div style="display:inline-block" id="targetFunArr-${index}"><input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
				);
				
			}
		}
		else{
			targetFun.insertAdjacentHTML(
				'beforeend',
				`<div style="display:inline-block" id="targetFunArr-${index}"><span> + </span><input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
			);
			restVars.insertAdjacentHTML(
				'beforeend',
				`<div id="resvar-${index}" style="display:inline-block;"><span>X</span><sub>${index+1}</sub><span>, </span></div>`
			);
			for (let j = 0; j < oldValRestrNox; j++) {
				let restrStr = restrictions.querySelector(`#restrictionsArr-${j}`);
					restrStr.insertAdjacentHTML(
						'beforeend',
						`<div style="display:inline-block" id="targetFunArr-${index}"><span> + </span><input type="number" placeholder="0" inputmode="decimal" autocomplete="off" style="width:70px"><span> x</span><sub>${index+1}</sub></div>`
					);
			}
		}
	}
}

let targetFun = bodyElement.querySelector("#function");
let restrictions = bodyElement.querySelector("#restrictions");
let condRest = bodyElement.querySelector("#cond");
let varsBox = bodyElement.querySelector("#varsBox");
let restrNox = bodyElement.querySelector("#restrBox");
let block2Answer = bodyElement.querySelector(".block-2-answer");
let restVars = bodyElement.querySelector("#rest-vars");

let oldValVarsBox = 0;
let oldValRestrNox = 0;
//событие на отрисовку целевой функции
varsBox.addEventListener('keyup', function (event) {
	if (varsBox.value=="" || varsBox.value==oldValVarsBox || varsBox.value.indexOf('-') > -1 || Number(varsBox.value)==0){return;}
	// отрисовка целевой функции
	targetFunPaint(oldValVarsBox,Number(varsBox.value))
	oldValVarsBox = Number(varsBox.value);
});

//событие на отрисовку ограничений
restrNox.addEventListener('keyup', function (event) {
	if (restrNox.value=="" || restrNox.value==oldValRestrNox || restrNox.value.indexOf('-') > -1 || Number(restrNox.value)==0){return;}
	// отрисовка ограничений
	restrictionsPaint(oldValRestrNox,Number(restrNox.value))
	oldValRestrNox = Number(restrNox.value);
});

//Отрисовка целевой функции и ограничений после загрузке страницы
document.addEventListener("DOMContentLoaded", function() {

	if (varsBox.value=="" || varsBox.value==oldValVarsBox || varsBox.value.indexOf('-') > -1 || Number(varsBox.value)==0){return;}
	// отрисовка целевой функции
	targetFunPaint(oldValVarsBox,Number(varsBox.value))
	oldValVarsBox = Number(varsBox.value);
	
	//----------------------------------------------------------------------------------------------------------
	if (restrNox.value=="" || restrNox.value==oldValRestrNox || restrNox.value.indexOf('-') > -1 || Number(restrNox.value)==0){return;}
	// отрисовка ограничений
	restrictionsPaint(oldValRestrNox,Number(restrNox.value))
	oldValRestrNox = Number(restrNox.value);

});


// script


let btnSolve = bodyElement.querySelector(".block-1-input__btn-solve");
let btnClear = bodyElement.querySelector(".block-1-input__btn-clear")


btnSolve.addEventListener("click", function(event) {

	// получаем доступ к эдементам убираем страрые результаты
	let fBlockInput = bodyElement.querySelector(".block-2-answer__f");
	let xBlockInput = bodyElement.querySelector(".block-2-answer__x");
	let checkf = fBlockInput.querySelector(".block-2-answer__f-ans");
	let checkx = xBlockInput.querySelector(".block-2-answer__x-ans");
	if(checkf){checkf.remove();}
	if(checkx){checkx.remove();}

	let coeff_target_func = []
	let coeff_limit= []
	let b = []
	let basis = []
	let delta_arr = []


	// заполняем массив коэф целевой ф.
	coeff_target_func = Array(oldValRestrNox+oldValVarsBox).fill(0);
	for (let index = 0; index < oldValVarsBox; index++) {
		let coefTargetFun = targetFun.querySelector(`#targetFunArr-${index}`).querySelector("input").value;
		if ( coefTargetFun == ""){
			coeff_target_func[index] = 0;
		}
		else{
			if (Number(coefTargetFun)<0){
				console.log("Нельзя вводить отрицательные числа")
				return;
			}
			coeff_target_func[index] = Number(coefTargetFun) ;
		}
	}

	// заполняем массив коэф ограничений и b и массив basis(там хранятся индекс базизсной переменной)
	for (let i = 0; i < oldValRestrNox; i++) {
		let rest = restrictions.querySelector(`#restrictionsArr-${i}`);
		coeff_limit[i] = Array(oldValVarsBox+oldValRestrNox).fill(0);
		for (let k = 0; k < oldValVarsBox; k++) {
			let coefRest = rest.querySelector(`#targetFunArr-${k}`).querySelector("input").value;
			if (coefRest==""){coeff_limit[i][k]=0;}
			else{
				if(Number(coefRest)<0){
					console.log("Нельзя вводить отрицательные числа")
					return;
				}
				coeff_limit[i][k] = Number(coefRest);
			}
		}
		coeff_limit[i][oldValVarsBox+i] = 1;
		basis[i] = oldValVarsBox+i;
	
		let bVal = condRest.querySelector(`#cond-${i}`).querySelector("input").value;
		if (bVal==""){b[i]=0;}
		else{b[i]= Number(bVal);}
	}

	console.log(coeff_target_func);
	console.log(coeff_limit);
	console.log(b);
	console.log(basis);


	while(true){
		//Расчет дельт
		for (let i = 0; i < coeff_limit[0].length; i++) {
			let delta = 0;
			for (let j = 0; j < basis.length; j++) {
				delta+=coeff_target_func[basis[j]] * coeff_limit[j][i];
			}
			console.log(delta);
			delta_arr[i] = delta - coeff_target_func[i];
		}
		let delta_last = 0;
		for (let j = 0; j < basis.length; j++) {
			delta_last+= coeff_target_func[basis[j]] * b[j];		
		}
		delta_arr.push(delta_last);
		console.log(delta_arr)



		//Проверка на оптимальность
		let test_optimal = true;
		for (let i = 0; i < delta_arr.length; i++) {
			if(delta_arr[i] < 0){
				test_optimal = false;
				break;
			}
			
		}

		if(!test_optimal){
			let deltaminI = arrayMinIndex(delta_arr)
			let Q = Array(oldValRestrNox).fill(0);
			for (let i = 0; i < oldValRestrNox; i++) {
				if(coeff_limit[i][deltaminI] <= 0){continue;};
				Q[i] = b[i] / coeff_limit[i][deltaminI];
			}
			let count = 0;
			for (let i = 0; i < Q.length; i++) {
				if(Q[i] == 0){count++;};
				
			}

			if(count==Q.length){
				block2Answer.style.marginTop = "30px";
				fBlockInput.insertAdjacentHTML(
					'beforeend',
					`<div class="block-2-answer__f-ans"></div>`
				);
				let fAns = fBlockInput.querySelector(".block-2-answer__f-ans"); 
				fAns.insertAdjacentHTML(
					'beforeend',
					`<div><b>Ответ:</b></div>`
				);
				fAns.insertAdjacentHTML(
					'beforeend',
					`<span>Решений нет :(</span>`
				);
				console.log("Решений нет");
				return;
			}

			let QminI = arrayMinIndexQ(Q);

			for (let i = 0; i < basis.length; i++) {
				if (coeff_limit[QminI][basis[i]] == 1) {
					basis[i] = deltaminI;
				}
			}

			let resolving_element = coeff_limit[QminI][deltaminI];
			for (let i = 0; i < coeff_limit[0].length; i++)
			{
					coeff_limit[QminI][i] /= resolving_element;
			}

			b[QminI] /= resolving_element;
			let resolution_column = Array(coeff_limit.length).fill(0)
			for (let i = 0; i < coeff_limit.length; i++)
			{
					resolution_column[i] = coeff_limit[i][deltaminI];
			}

			for (let i = 0; i < oldValRestrNox; i++)
				{
						if (i == QminI) { continue; }
						for (let j = 0; j < coeff_limit[0].length; j++)
						{
							coeff_limit[i][j] -= (coeff_limit[QminI][j] * resolution_column[i]);
						}
						b[i] -= (b[QminI] * resolution_column[i]);
				}

		}
		else {

			block2Answer.style.marginTop = "30px";
			fBlockInput.insertAdjacentHTML(
				'beforeend',
				`<div class="block-2-answer__f-ans"></div>`
			);
			xBlockInput.insertAdjacentHTML(
				'beforeend',
				`<div class="block-2-answer__x-ans"></div>`
			);
			let fAns = fBlockInput.querySelector(".block-2-answer__f-ans"); 
			let xAns = xBlockInput.querySelector(".block-2-answer__x-ans"); 
			fAns.style.marginBottom = "20px";

			let x_all = Array(coeff_limit[0].length).fill(0);
			let j = 0;
			for (let i = 0; i < basis.length; i++)
			{
					x_all[basis[i]] = b[j];
					j++;
			}
			let F_res = 0;
			let lenxall = x_all.length
			for(let i=0; i < lenxall; i++) { 
				if (lenxall-i==1){
					xAns.insertAdjacentHTML(
						'beforeend',
						`<span>X</span><sub>${(i+1)}</sub><span> = </span> <span style="color:black;">${x_all[i]}</span>`
					);
				}
				else{
					xAns.insertAdjacentHTML(
						'beforeend',
						`<span>X</span><sub>${(i+1)}</sub><span> = </span> <span style="color:black;">${x_all[i]}</span><span>,  </span>`
					);
				}
					console.log("x"+(i+1)+"="+x_all[i]+", ");
					F_res += x_all[i] * coeff_target_func[i];
			}
			fAns.insertAdjacentHTML(
				'beforeend',
				`<div><b>Ответ:</b></div>`
			);
			fAns.insertAdjacentHTML(
				'beforeend',
				`<span>F = </span><span style="color:black;">${F_res}</span>`
			);
			console.log("F = "+F_res);
			return; 
		}
	}
	


});

btnClear.addEventListener("click",function(event){
	for (let index = 0; index < oldValVarsBox; index++) {
		targetFun.querySelector(`#targetFunArr-${index}`).querySelector("input").value = "";
	}

	for (let i = 0; i < oldValRestrNox; i++) {
		let rest = restrictions.querySelector(`#restrictionsArr-${i}`);
		for (let k = 0; k < oldValVarsBox; k++) {
			rest.querySelector(`#targetFunArr-${k}`).querySelector("input").value = "";
		}
		condRest.querySelector(`#cond-${i}`).querySelector("input").value = "";
	}
});

