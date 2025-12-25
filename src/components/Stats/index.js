import './index.css'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const MatchStatsPieChart = props => {
  const {stats} = props
  const {win, loss, draw} = stats

  const data = [
    {name: 'Won', value: win},
    {name: 'Lost', value: loss},
    {name: 'Draw', value: draw},
  ]

  const COLORS = ['#2dca73', '#ff4b4b', '#a3a3a3']

  const renderLegendText = value => (
    <span
      style={{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: '500',
        marginLeft: '10px',
      }}
    >
      {value}
    </span>
  )

  return (
    <div className="piechart" style={{width: '100%', height: 450}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            isAnimationActive={false}
            innerRadius={0}
            outerRadius={120}
            dataKey="value"
            stroke="none"
          >
            {data.map(entry => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[data.indexOf(entry)]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
            }}
            itemStyle={{color: '#ffffff'}}
          />
          <Legend
            verticalAlign="bottom"
            height={60}
            iconSize={24}
            formatter={renderLegendText}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MatchStatsPieChart
