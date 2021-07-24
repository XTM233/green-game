var population, resourcePoints;
var earthquakeLikelihood, seaPollution_old, seaPollution_new, ecoImbalance_new, ecoImbalance_old, techPoints, cityCapacity;
var round = 0;
var numTech = 0;

const TECH_POP_COEFT = 0.2 //techpoints generated per capital
const SEA_MAX = 1500 //terminational condition concerning sea pollution
const POP_MIN = 1
const ECO_MAX = 1
const RD_MAX, RD_MIN, TECH_MAX = 10 //tmp defined
const FERT_BASE = 0.5
const MORT_BASE = 0.5
const EQ_COEFT = 0.05 //tmp defined

///
population = 5000
resourcePoints = 0
earthquakeLikehood = 0
seaPollution_old = 1000
cityCapacity = 6000
ecoImbalance_oldconImbalance
city = 1000 // 一回合消耗1000 resource points, 能linear about population 更好
dock = 100

///

var arrayPerRound = [population, resourcePoints, earthquakeLikelihood, seaPollution, ecoImbalance, techPoints]

function updateValues(arrayPerRound) {
    var seaPollution_old = arrayPerRound[3];
    var resourcePoints_old = arrayPerRound[1];
    var ecoImbalance_old = arrayPerRound[4];
    var population_old = arrayPerRound[0];
    var population_new = (FERT_BASE + numTech / TECH_MAX * 0.5 - seaPollution / SEA_MAX) * population_old + population_old
    var population_new = (1 - population_old / cityCapacity) population *
        var seaPollution_new = (seaPollution_old + dock + city) * 1.01 - 200 - conservation
            // dock 是码头 city是城镇 每回合码头和城镇都会对海洋产生污染 每回合海洋自己可以修复200

    var earthquakeLikelihood = (mine + farmland - forest + city) * EQ_COEFT
    var resourcePoints_new = resourcePoints_old - cityConsumption + powerplantGain + farmlandlGain + dockGain
    var ecoImbalance_new = (ecoImbalance_old + city + mine) * 1.01 - forest - conservation
    var techPoints_new = arrayPerRound[5] + population_old * TECH_POP_COEFT + qnsAnswered
    var arrayPerRound = [population_new, resourcePoints_new, earthquakeLikelihood, seaPollution_new, ecoImbalance_new, techPoints_new]
}

function randomDisasterMort(earthquakeLikelihood) {
    return earthquakeLikelihood * population // TODO 先 linear，过后再 random
}
//TODO OOP different land and their impact to environment

class Land() { // 这个land就是我们一直在说的tech
    def __init__(type, position):
        type in ["dock", "farmland", "powerplant", "urbancity"]
    isinstance(position, tuple)
}

class dock(Land) {
    def __init__
    dock.resource_production =
}

function Land(type = "forest", position) {
    this.type = type;
    this.position = position
}

Land.prototype = {
        constructor: Land,
        applyTechnology(tech): function { // drag event 玩家拖拽图标到可以apply科技的格子触发
            if (tech = "dock" && position not in coast) {
                console.error(tech);
            } else :{
                    this: type = tech,
                }
                //如果不沿海就不能建dock


        }