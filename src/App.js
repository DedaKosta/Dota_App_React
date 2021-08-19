import './App.css';
import Header from './components/Header'
import ImageList from './components/ImageList'
import Information from './components/Information'
import Stats from './components/Stats'
import { useState } from 'react'

function App() {

  const [hero, setHero] = useState(
    {
      name : 'abaddon',
      main_attribute : 'str',
      base_str : '23',
      base_agi : '23',
      base_int : '18',
      str_gain : '3.0',
      agi_gain : '1.5',
      int_gain : '2.0',
      attack_type : 'melee',
      complexity : '1',
      min_base_demage : '51',
      max_base_demage : '61',
      attack_tick : '1.7',
      attack_range : '150',
      projectile_speed : '900',
      base_armor : '2.8',
      magic_resistance : '25',
      move_speed : '325',
      turn_rate : '0.6',
      day_vision : '1800',
      night_vision : '800',
      carry_role : '2',
      disabler_role : '0',
      escape_role : '0',
      support_role : '4',
      jungler_role : '0',
      pusher_role : '0',
      nuker_role : '0',
      durable_role : '4',
      initiator_role : '0',
      base_hp : '660',
      hp_regen : '3.3',
      base_mana : '291',
      mana_regen : '0.9',
      description : '"The Font of Avernus is the source of a families strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. They grow up believing themselves fierce protectors of their lineal traditions, the customs of the realm--but what they really are protecting is the Font itself. And the motives of the mist are unclear.__When the infant Abaddon was bathed in the Font, they say something went awry. In the childs eyes there flared a light of comprehension that startled all present and set the sacerdotes to whispering. He was raised with every expectation of following the path all scions of Avernus took to train in war, that in times of need he might lead the familys army in defense of the ancestral lands. But Abaddon was always one apart. Where others trained with weapons, he bent himself to meditation in the presence of the mist. He drank deep from the vapors that welled from the Font, learning to blend his spirit with the potency that flowed from far beneath the House; he became a creature of the black mist.__There was bitterness within the House Avernus elders and young alike accusing him of neglecting his responsibilities. But all such accusations stopped when Abaddon rode into battle, and they saw how the powers of the mist had given him mastery over life and death beyond those of any lord the House had ever known."'
    }
  )

  let roles = [
    {
      name: 'carry',
      value: hero.carry_role
    },
    {
      name: 'support',
      value: hero.support_role
    },
    {
      name: 'nuker',
      value: hero.nuker_role
    },
    {
      name: 'disabler',
      value: hero.disabler_role
    },
    {
      name: 'jungler',
      value: hero.jungler_role
    },
    {
      name: 'durable',
      value: hero.durable_role
    },
    {
      name: 'escape',
      value: hero.escape_role
    },
    {
      name: 'pusher',
      value: hero.pusher_role
    },
    {
      name: 'initiator',
      value: hero.initiator_role
    }
  ]

  const getHeroInformation = (name) => {
    console.log(name)
    fetch('http://localhost:8080/' + name + '/', {
        method: "GET",
    }).then(response => response.json()).then(hero => {
        setHero(hero[0])
        
    })
  }

  return (
    <div className="App" >
      <Header />

      <ImageList onClick={getHeroInformation}/>

      <section className='information-section'>
        <Information 
          main={hero.main_attribute} 
          attackType={hero.attack_type} 
          description={hero.description} 
          complexity={hero.complexity} 
          name={hero.name.replace(' ','_')}/>
      </section>

      <hr />

      <section className='stats-section'>
        <Stats 
          name={hero.name} 
          maxHP={hero.base_hp} 
          hpRegen={hero.hp_regen} 
          maxMana={hero.base_mana} 
          manaRegen={hero.mana_regen} 
          baseStr={hero.base_str} 
          strGain={hero.str_gain} 
          baseAgi={hero.base_agi} 
          agiGain={hero.agi_gain} 
          baseInt={hero.base_int} 
          intGain={hero.int_gain} 
          roles={roles} 
          minDemage={hero.min_base_demage}
          maxDemage={hero.max_base_demage}
          attackTick={hero.attack_tick}
          attackRange={hero.attack_range}
          projectileSpeed={hero.projectile_speed}
          baseArmor={hero.base_armor}
          magicResistance={hero.magic_resistance}
          moveSpeed={hero.move_speed}
          turnRate={hero.turn_rate}
          dayVision={hero.day_vision}
          nightVision={hero.night_vision}
        />
      </section>

      <hr />

    </div>
  );
}

export default App;
