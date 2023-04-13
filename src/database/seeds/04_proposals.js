exports.seed = async (knex) => {
  const proposals = [
    {
      id: 1,
      title: 'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
      coadvisor: 'Guilherme Corrêa',
      filePath: '/home/sim',
      abstract: 'forget',
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 1,
      studentEmail: 'lwtavares@inf.ufpel.edu.br',
      advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      id: 2,
      title: 'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
      coadvisor: 'Guilherme Corrêa',
      filePath: '/home/sim',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 1,
      studentEmail: 'lwtavares@inf.ufpel.edu.br',
      advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },

  ];

  await knex('proposals').del();

  await knex('proposals').insert(proposals);
};