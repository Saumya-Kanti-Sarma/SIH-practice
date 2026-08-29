import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tasks = [
  { room: '404', type: 'Inspection', time: '11:00 AM', priority: 'High', color: '#f2b25e', icon: 'fact-check' },
  { room: '203', type: 'Cleaning', time: '01:30 PM', priority: 'Medium', color: '#63cda0', icon: 'cleaning-services' },
  { room: '818', type: 'Maintenance', time: '02:30 PM', priority: 'High', color: '#c95454', icon: 'build' },
];

export default function MyTaskScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>Friday, 28 August</Text>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>Keep today’s turnaround moving.</Text>
        <View style={styles.summary}><View><Text style={styles.summaryNumber}>3</Text><Text style={styles.summaryLabel}>Tasks today</Text></View><MaterialIcons name="assignment" size={38} color="#14b96a" /></View>
        <Text style={styles.sectionTitle}>Today’s schedule</Text>
        {tasks.map((task) => (
          <View key={task.room} style={styles.taskCard}>
            <View style={[styles.taskIcon, { backgroundColor: `${task.color}22` }]}><MaterialIcons name={task.icon as any} size={22} color={task.color} /></View>
            <View style={styles.taskCopy}><Text style={styles.taskType}>{task.type}</Text><Text style={styles.taskRoom}>Room {task.room}</Text><View style={styles.taskMeta}><MaterialIcons name="schedule" size={14} color="#8995a2" /><Text>{task.time}</Text></View></View>
            <View style={[styles.priority, { backgroundColor: `${task.color}22` }]}><Text style={{ color: task.color }}>{task.priority}</Text></View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7fafc' }, content: { padding: 20, paddingBottom: 30 },
  eyebrow: { color: '#7d8996', fontSize: 12, marginTop: 8 }, title: { color: '#172b43', fontSize: 28, fontWeight: '800', marginTop: 5 }, subtitle: { color: '#82909e', fontSize: 13, marginTop: 5 },
  summary: { alignItems: 'center', backgroundColor: '#e6f8ef', borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, padding: 18 }, summaryNumber: { color: '#14a963', fontSize: 30, fontWeight: '800' }, summaryLabel: { color: '#4e8a6d', fontSize: 12, marginTop: 2 }, sectionTitle: { color: '#29394c', fontSize: 14, fontWeight: '800', marginBottom: 12, marginTop: 26 },
  taskCard: { alignItems: 'center', backgroundColor: '#fff', borderRadius: 14, flexDirection: 'row', marginBottom: 12, padding: 14, shadowColor: '#b6c2ce', shadowOpacity: 0.13, shadowRadius: 9, elevation: 2 }, taskIcon: { alignItems: 'center', borderRadius: 10, height: 42, justifyContent: 'center', width: 42 }, taskCopy: { flex: 1, marginLeft: 12 }, taskType: { color: '#34465a', fontSize: 13, fontWeight: '800' }, taskRoom: { color: '#7e8a96', fontSize: 11, marginTop: 3 }, taskMeta: { alignItems: 'center', flexDirection: 'row', gap: 4, marginTop: 8 }, priority: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 5 }, priorityText: { fontSize: 10, fontWeight: '800' },
});