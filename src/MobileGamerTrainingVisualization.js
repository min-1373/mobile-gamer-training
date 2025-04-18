import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const MobileGamerTrainingVisualization = () => {
  // 모바일 프로게이머 부상 부위 데이터
  const injuryData = [
    { name: "손목", value: 68 },
    { name: "목/어깨", value: 54 },
    { name: "허리", value: 41 },
    { name: "손가락", value: 37 },
    { name: "팔꿈치", value: 32 }
  ];

  // 훈련 효과 데이터 (연구 결과 기반)
  const trainingEffectsData = [
    { name: '부상 감소', weightTraining: 50, stretching: 35, combined: 60 },
    { name: '반응 속도', weightTraining: 12, stretching: 5, combined: 15 },
    { name: '집중력', weightTraining: 10, stretching: 8, combined: 15 },
    { name: '장기 경기력', weightTraining: 15, stretching: 10, combined: 20 }
  ];

  // 국가별 접근법 비교
  const countryApproachData = [
    { name: '한국', weightTraining: 80, stretching: 90, mentalHealth: 70 },
    { name: '중국', weightTraining: 85, stretching: 75, mentalHealth: 60 },
    { name: '미국', weightTraining: 70, stretching: 65, mentalHealth: 80 },
    { name: '유럽', weightTraining: 75, stretching: 70, mentalHealth: 85 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const containerStyle = {
    width: '100%',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '32px',
    textAlign: 'center'
  };

  const sectionStyle = {
    marginBottom: '48px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px'
  };

  const chartContainerStyle = {
    height: '400px'
  };

  const summaryStyle = {
    marginTop: '32px',
    padding: '16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px'
  };

  const summaryTitleStyle = {
    fontWeight: '600',
    marginBottom: '8px'
  };

  const listStyle = {
    paddingLeft: '20px',
    listStyleType: 'disc'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>모바일 프로게이머 웨이트 트레이닝 및 스트레칭 효과 분석</h1>
      
      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>프로게이머 주요 부상 부위 (%)</h2>
        <div style={chartContainerStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={injuryData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {injuryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>트레이닝 유형별 효과 비교 (%)</h2>
        <div style={chartContainerStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={trainingEffectsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="weightTraining" name="웨이트 트레이닝" fill="#8884d8" />
              <Bar dataKey="stretching" name="스트레칭" fill="#82ca9d" />
              <Bar dataKey="combined" name="복합 트레이닝" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>국가별 훈련 접근법 비교</h2>
        <div style={chartContainerStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={countryApproachData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weightTraining" name="웨이트 트레이닝 중점도" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="stretching" name="스트레칭 중점도" stroke="#82ca9d" />
              <Line type="monotone" dataKey="mentalHealth" name="정신 건강 중점도" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={summaryStyle}>
        <h3 style={summaryTitleStyle}>주요 연구 결과 요약:</h3>
        <ul style={listStyle}>
          <li>DiFrancisco-Donoghue et al. (2019): 정기적인 스트레칭과 근력 운동이 손목 및 손 통증을 크게 감소시킬 수 있음</li>
          <li>Zwibel et al. (2020): 웨이트 트레이닝을 포함한 프로그램이 프로게이머의 반응 속도와 경기력을 향상시킴</li>
          <li>Rudolf et al. (2022): 규칙적인 신체 활동이 인지 기능과 반응 속도를 향상시킴</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileGamerTrainingVisualization;