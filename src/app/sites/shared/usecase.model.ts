
export class Usecase{
  public case_name: string;
  public organizations: string[];
  public contact_person: {name: string, email: string} | null;
  public industries: string[] | null;
  public link: string | null;
  public type: string[] | null;
  public maturity_of_processing: string[] | null;
  public source: string[] | null;
  public privacy: string[] | null;
  public pii_relevance: string[] | null;
  public sovereignitiy: string[] | null;
  public timeframe: string[] | null;
  public motivation: string[] | null;
  public scope: string[] | null;
  public reward: string[] | null;
  public payment_model: string[] | null;
  public role: string[] | null;
  public provision: string[] | null;
  public interoperability: string[] | null;
  public access_coordination: string[] | null;
  public frequency: string[] | null;
  public purpose_of_usage: string[] | null;
  public type_of_relationship: string[] | null;
  public benefits: string[] | null;
  public initiating_party: string[] | null;
  public control_authority: string[] | null;
  public static numDimensions = 26;

  constructor(
    case_name: string,
    organizations: string[],
    contact_person: {name: string | null, email: string | null} | null,
    industries: string[] | null,
    link: string | null,
    type: string[] | null,
    maturity_of_processing: string[] | null,
    source: string[] | null,
    privacy: string[] | null,
    pii_relevance: string[] | null,
    sovereignitiy: string[] | null,
    timeframe: string[] | null,
    motivation: string[] | null,
    scope: string[] | null,
    reward: string[] | null,
    payment_model: string[] | null,
    role: string[] | null,
    provision: string[] | null,
    interoperability: string[] | null,
    access_coordination: string[] | null,
    frequency: string[] | null,
    purpose_of_usage: string[] | null,
    type_of_relationship: string[] | null,
    benefits: string[] | null,
    initiating_party: string[] | null,
    control_authority: string[] | null
) {
    this.case_name = case_name;
    this.organizations = organizations;
    this.contact_person = contact_person;
    this.industries = industries;
    this.link = link;
    this.type = type;
    this.maturity_of_processing = maturity_of_processing;
    this.source = source;
    this.privacy = privacy;
    this.pii_relevance = pii_relevance;
    this.sovereignitiy = sovereignitiy;
    this.timeframe = timeframe;
    this.motivation = motivation;
    this.scope = scope;
    this.reward = reward;
    this.payment_model = payment_model;
    this.role = role;
    this.provision = provision;
    this.interoperability = interoperability;
    this.access_coordination = access_coordination;
    this.frequency = frequency;
    this.purpose_of_usage = purpose_of_usage;
    this.type_of_relationship = type_of_relationship;
    this.benefits = benefits;
    this.initiating_party = initiating_party;
    this.control_authority = control_authority;
  }

  public static caseSimilarity(c1: Usecase, c2: Usecase) {
    let c1_entries: [string, any][] = Object.entries(c1);
    let c2_entries: [string, any][] = Object.entries(c2);

    let cleaned_lists = this.removeNullValues(c1_entries, c2_entries);

    c1_entries = cleaned_lists[0];
    c2_entries = cleaned_lists[1];

    let matchingDimensions: number = 0;
    let allDimensions: number = 0;

    for (let i = 0; i < c1_entries.length; i++) {
      if (Array.isArray(c1_entries[i][1])){
        if (c1_entries[i][1].length > c2_entries[i][1].length){
          for (let k = 0; k < c2_entries[i][1].length; k++){
            if (c1_entries[i][1].includes(c2_entries[i][1][k])){
              matchingDimensions++;
            }
          allDimensions = allDimensions + c1_entries[i][1].length;
          }
        } else {
            for(let k = 0; k < c1_entries[i][1].length; k++){
              if (c2_entries[i][1].includes(c1_entries[i][1][k])){
                matchingDimensions++;
              }
            allDimensions = allDimensions + c2_entries[i][1].length;
            }
        }
      } else {
        if (
            (c1_entries[i][1].toLowerCase().includes(c2_entries[i][1].toLowerCase()) ||
             c2_entries[i][1].toLowerCase().includes(c1_entries[i][1].toLowerCase())) &&
            (typeof c1_entries[i][1] === 'string' && typeof c2_entries[i][1] === 'string')
            ) {
          matchingDimensions++;
          allDimensions++;
        } else{
          allDimensions++;
        }
      }
    }

    let matchingRate = matchingDimensions / allDimensions;
    console.log('Matching rate :' + matchingRate)
    return matchingRate;

  }

  public static removeNullValues (list1: [string, any][], list2: [string, any][]) {

    console.log(list1.length);
    console.log(list2.length);
    console.log(list1);
    console.log(list2);
    let newlist1 = [];
    let newlist2 = [];

    for (let i = 0; i < this.numDimensions; i++) {
      console.log('Element Liste 1: ' + list1[i][1])
      console.log('Element Liste 2: ' + list2[i][1])
      if (list1[i][1] !== null && list2[i][1] !== null){
        console.log('Dimension ' + list1[i][0] + ' wird der neuen Liste hinzugefügt.');
        newlist1.push(list1[i]);
        newlist2.push(list2[i]);
      } else {
        console.log('Dimension ' + list1[i][0] + ' wird der neuen Liste nicht hinzugefügt.');
      }

    }

    return [newlist1, newlist2]
  }

}
