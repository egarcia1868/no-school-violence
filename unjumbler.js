//The format that we're getting the behaviors in is horribly jumbled so I created this to unjumble it and write the unjumbled list to a txt file for us to use.

const fs = require("fs");

let jumbled = `Chinese Fire DrillAbusive CycleAction Assembly TheoryActiveAggressiveAlienationAlloplastic adaptationAlways and "Never" StatementsAmbitiousAngerAnimal SpiritsAnorexiaAnxietyArgumentativeArsonAccismusAssaultAssertiveAttention seekingAttention Deficit Hyperactivity disorder HyperactivityADHDAttitude ChangeAutism Spectrum Disorder ASDAutoplastic defense mechanismAvoidanceAvoidance CopingBad HabitBaitingBehaviorBehavior ChangeBehavioral confirmationBehavioral contagionBehavioral ModernityBehavioral UrbanismBelittlingCondescending PatronizingBingeBipolar Disorder Manic DepressiveManicBlamingBorderline Personality DisorderBoreoutBossyBreastfeedingBrodieBulimiaBullyingcalculus of conceptsCarelessCatastrophizingCautiousChaos ManufactureCheatingChild AbuseChronic Broken PromisesCircular ConversationsCivil InattentionClose mindedCold FeetCommunication TheoryConceitedConduct disorderConduct disorderConfirmation BiasConscientiousControl Me SyndromeCopingCreativeCruelty to AnimalsCultural DivideCultural MediationCultural Universal Human UniversalCuriousCursoryCutting in LineCyberbullyingDeceitfulDeceptionDemonstration EffectsDenialDenunciationDependencyDescription ErrorDigital Intelligence QuotientDishonestyDisinhibitionDissociationDistractionDocileDomestic TheftDomineeringDrop OutDual LoyaltyEating DisordersEccentricityEmotional AbuseEmotional BlackmailEndemic WarfareEngulfmentEscape To FantasyEvasionEvolutionary PsychologyExtrovertExtrovertedFalse AccusationsFast paced/high energyFavoritism and ScapegoatingFear of AbandonmentFeelings of EmptinessFrivolous LitigationFunctional Ensemble of Temperament ModelGaslightingGenderGender DysphoriaGender RolesGenderqueerGeneralized Anxiety DisorderGADGold diggingGroomingGroup PolarizationGultiveHabitHarassmentHealth Action Process Approach HAPAHerd MentalityHigh Functioning Personality DisorderHoardingHold mindedHoliday TriggersHoliday TriggersHoovers & HooveringHuman Universal (Also, Cultural Universal)HypoactivityHysteriaIdentity DisturbanceImposed IsolationImpulseImpulsiveImpulsivenessImpulsivityInappropriate BehaviorInclusive FitnessInconsiderateIndependentIndirectInfantilizationInfomaniaIntimidationIntrasexual competitionIntrovertIntrovertedIntrusiveInvalidationInventiveIrrationalityIrritatingLack of ConscienceLack of Object ConstancyLack of persistencyLazy / lazinessLeisure seeking / satisfactionLonerLow achievement orientationLow AmbitionLow Functioning Personality DisorderLow InnovationLow Self EsteemMagical ThinkingMajor Depressive Disorder DepressionManicManipulationManipulativeMaskingMirroringMoments of ClarityMood SwingMoodyMoralisticMunchausenSyndromeName-CallingNarcissismNeglectNervousNervousExcitedNo-Win ScenariosNonverbal Expressions of DominanceNonverbal IntimidationNormalizingNot My Fault SyndromeObjectificationObsessive Compulsive BehaviorOCBObsessive Compulsive DisorderOCDOppositional defiant disorderPanic AttacksPanic DisorderParental Alienation SyndromeParentificationPassivePassive AggresionPassive AggressionPassive-Aggressive BehaviorPathological LyingPerfectionismPerfectionistPersonalityPetulancePhysical AbusePhysical ViolencePoor Adaptation/FlexibilityPoor Detail OrientationPoor intuitionPoor LeaderPoor Persuasive AbilityPoor Team playerPost-traumatic Stress Disorder PTSDPragmaticProactiveProjectionProxy RecruitmentPush-PullQueerRagingViolenceImpulsive AggressionRanking and ComparingReactiveRelationship Hyper VigilanceReservedRiding the Emotional ElevatorRisk takerRoutine orientedRudeSabotageScapegoatingSchizophreniaSeasonal Affective DisorderSelective CompetenceSelective Memory and Selective AmnesiaSelf-AggrandizementSelf-HarmSelf-LoathingSelf-orientedSelf-VictimizationSense of EntitlementSeriousSex Sexual AssaultSexual CoercionSexual ObjectificationSexual OrientationShamingShySilent TreatmentSituational EthicsSleep DeprivationSocial Anxiety DisorderSpitefulSplittingStalkingStress intolerantStunted Emotional GrowthSuicidal IdeationTargeted HumorMocking SarcasmTerminal UniquenessTestingThe Abuser ProfileTheftThought PolicingThoughtlessThreatsTrollUn-conventional thinkerUncooperativeUndependableUndiplomaticVandalism`;

let res = "";
let count = 0;

// the only thing this wont catch is going to be new behavoirs that start lower case.  These will have to be adjusted manually
for (let i = 0; i < jumbled.length-1; i++) {
  // this will check to see if the previous behavoir ended in a ) and will split after the )
  if (jumbled[i] === ")" && Boolean(jumbled[i+1].match(/\w/))) {
    res += `, \`${jumbled.slice(count, i+1)}\``
    count = i+1;
  }
  //this will check if i or i+1 is a space or non-word character.  If neither are a space or non-word characters, it continues on to splitting, if 
  else if (!Boolean(jumbled[i].match(/\W/)) && !Boolean(jumbled[i+1].match(/\W/))) {
    //This will check for consecutive capitals like ADHD and will separate the last letter of the of the initialisms from the first letter of the next behavior
    if (jumbled[i] === jumbled[i].toUpperCase() && jumbled[i+1] === jumbled[i+1].toUpperCase()) {
      if (jumbled[i+2] === jumbled[i+2].toLowerCase()) {
        res += `, \`${jumbled.slice(count, i+1)}\``;
        count = i+1;
      }
    } 
    //This will check for the jumbled parts where a lowercase letter is immediately followed by a capital and split the two behaviors.
    else if (jumbled[i] === jumbled[i].toLowerCase() && jumbled[i+1] === jumbled[i+1].toUpperCase()) {
      if (res.length > 0) {
        res += ", ";
      }
      res += `\`${jumbled.slice(count, i+1)}\``
      count = i+1;
    }
  }
}

fs.writeFile("./unjumbled.txt", res, () => {
  console.log("file was written")
})
