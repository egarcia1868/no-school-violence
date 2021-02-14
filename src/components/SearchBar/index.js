import React from "react";

const SearchBar = (props) => {
  
  const behaviors = [`Chinese Fire Drill`, `Abusive Cycle`, `Action Assembly Theory`, `Active`, `Aggressive`, `Alienation`, `Alloplastic adaptation`, `Always and "Never" Statements`, `Ambitious`, `Anger`, `Animal Spirits`, `Anorexia`, `Anxiety`, `Argumentative`, `Arson`, `Accismus`, `Assault`, `Assertive`, `Attention seeking`, `Attention Deficit Hyperactivity disorder Hyperactivity`, `ADHD`, `Attitude Change`, `Autism Spectrum Disorder ASD`, `Autoplastic defense mechanism`, `Avoidance`, `Avoidance Coping`, `Bad Habit`, `Baiting`, `Behavior`, `Behavior Change`, `Behavioral confirmation`, `Behavioral contagion`, `Behavioral Modernity`, `Behavioral Urbanism`, `Belittling`, `Condescending Patronizing`, `Binge`, `Bipolar Disorder Manic Depressive`, `Manic`, `Blaming`, `Borderline Personality Disorder`, `Boreout`, `Bossy`, `Breastfeeding`, `Brodie`, `Bulimia`, `Bullyingcalculus of concepts`, `Careless`, `Catastrophizing`, `Cautious`, `Chaos Manufacture`, `Cheating`, `Child Abuse`, `Chronic Broken Promises`, `Circular Conversations`, `Civil Inattention`, `Close minded`, `Cold Feet`, `Communication Theory`, `Conceited`, `Conduct disorder`, `Conduct disorder`, `Confirmation Bias`, `Conscientious`, `Control Me Syndrome`, `Coping`, `Creative`, `Cruelty to Animals`, `Cultural Divide`, `Cultural Mediation`, `Cultural Universal Human Universal`, `Curious`, `Cursory`, `Cutting in Line`, `Cyberbullying`, `Deceitful`, `Deception`, `Demonstration Effects`, `Denial`, `Denunciation`, `Dependency`, `Description Error`, `Digital Intelligence Quotient`, `Dishonesty`, `Disinhibition`, `Dissociation`, `Distraction`, `Docile`, `Domestic Theft`, `Domineering`, `Drop Out`, `Dual Loyalty`, `Eating Disorders`, `Eccentricity`, `Emotional Abuse`, `Emotional Blackmail`, `Endemic Warfare`, `Engulfment`, `Escape To Fantasy`, `Evasion`, `Evolutionary Psychology`, `Extrovert`, `Extroverted`, `False Accusations`, `Fast paced/high energy`, `Favoritism and Scapegoating`, `Fear of Abandonment`, `Feelings of Emptiness`, `Frivolous Litigation`, `Functional Ensemble of Temperament Model`, `Gaslighting`, `Gender`, `Gender Dysphoria`, `Gender Roles`, `Genderqueer`, `Generalized Anxiety Disorder`, `GAD`, `Gold digging`, `Grooming`, `Group Polarization`, `Gultive`, `Habit`, `Harassment`, `Health Action Process Approach HAPA`, `Herd Mentality`, `High Functioning Personality Disorder`, `Hoarding`, `Hold minded`, `Holiday Triggers`, `Holiday Triggers`, `Hoovers & Hoovering`, `Human Universal (Also, Cultural Universal)`, `Hypoactivity`, `Hysteria`, `Identity Disturbance`, `Imposed Isolation`, `Impulse`, `Impulsive`, `Impulsiveness`, `Impulsivity`, `Inappropriate Behavior`, `Inclusive Fitness`, `Inconsiderate`, `Independent`, `Indirect`, `Infantilization`, `Infomania`, `Intimidation`, `Intrasexual competition`, `Introvert`, `Introverted`, `Intrusive`, `Invalidation`, `Inventive`, `Irrationality`, `Irritating`, `Lack of Conscience`, `Lack of Object Constancy`, `Lack of persistency`, `Lazy / laziness`, `Leisure seeking / satisfaction`, `Loner`, `Low achievement orientation`, `Low Ambition`, `Low Functioning Personality Disorder`, `Low Innovation`, `Low Self Esteem`, `Magical Thinking`, `Major Depressive Disorder Depression`, `Manic`, `Manipulation`, `Manipulative`, `Masking`, `Mirroring`, `Moments of Clarity`, `Mood Swing`, `Moody`, `Moralistic`, `Munchausen`, `Syndrome`, `Name-Calling`, `Narcissism`, `Neglect`, `Nervous`, `Nervous`, `Excited`, `No-Win Scenarios`, `Nonverbal Expressions of Dominance`, `Nonverbal Intimidation`, `Normalizing`, `Not My Fault Syndrome`, `Objectification`, `Obsessive Compulsive Behavior`, `OCB`, `Obsessive Compulsive Disorder`, `OCD`, `Oppositional defiant disorder`, `Panic Attacks`, `Panic Disorder`, `Parental Alienation Syndrome`, `Parentification`, `Passive`, `Passive Aggresion`, `Passive Aggression`, `Passive-Aggressive Behavior`, `Pathological Lying`, `Perfectionism`, `Perfectionist`, `Personality`, `Petulance`, `Physical Abuse`, `Physical Violence`, `Poor Adaptation/Flexibility`, `Poor Detail Orientation`, `Poor intuition`, `Poor Leader`, `Poor Persuasive Ability`, `Poor Team player`, `Post-traumatic Stress Disorder PTSD`, `Pragmatic`, `Proactive`, `Projection`, `Proxy Recruitment`, `Push-Pull`, `Queer`, `Raging`, `Violence`, `Impulsive Aggression`, `Ranking and Comparing`, `Reactive`, `Relationship Hyper Vigilance`, `Reserved`, `Riding the Emotional Elevator`, `Risk taker`, `Routine oriented`, `Rude`, `Sabotage`, `Scapegoating`, `Schizophrenia`, `Seasonal Affective Disorder`, `Selective Competence`, `Selective Memory and Selective Amnesia`, `Self-Aggrandizement`, `Self-Harm`, `Self-Loathing`, `Self-oriented`, `Self-Victimization`, `Sense of Entitlement`, `Serious`, `Sex Sexual Assault`, `Sexual Coercion`, `Sexual Objectification`, `Sexual Orientation`, `Shaming`, `Shy`, `Silent Treatment`, `Situational Ethics`, `Sleep Deprivation`, `Social Anxiety Disorder`, `Spiteful`, `Splitting`, `Stalking`, `Stress intolerant`, `Stunted Emotional Growth`, `Suicidal Ideation`, `Targeted Humor`, `Mocking Sarcasm`, `Terminal Uniqueness`, `Testing`, `The Abuser Profile`, `Theft`, `Thought Policing`, `Thoughtless`, `Threats`, `Troll`, `Un-conventional thinker`, `Uncooperative`, `Undependable`, `Undiplomatic`];
  
  return (
    <form style={{width: "100%"}} autoComplete="off">
      <div className="form-group autocomplete">
        {/*<label htmlFor="search"><strong>Enter behavoirs you're:</strong></label>*/}
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          list="behaviors"
          type="text"
          className="form-control"
          placeholder="Enter behaviors here"
          id="search"
        />
        <datalist id="behaviors">
          {behaviors.map((behavior, i) => (
            <option value={behavior} key={i} />
          ))}
        </datalist>
        <button style={{margin:"1% 0 2%"}} onClick={props.handleSearchSubmit} className="btn btn-success">
          Add behavior
        </button>
      </div>
    </form>
  )
}

export default SearchBar