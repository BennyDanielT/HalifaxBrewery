import routes from 'routes/constants.js';
import Home from './screens/home.js';
import Add from './screens/add.js';
import Update from './screens/update.js';
function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.home.name}
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name={routes.add.name} component={Add} />
        <Stack.Screen name={routes.update.name} component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routing };
